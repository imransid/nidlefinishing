/* eslint-disable */
import React, {type FC, useCallback, useEffect} from 'react';
import {Alert, FlatList, Text, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

import {type RootState} from '@/store';
import NetInfo from '@react-native-community/netinfo';
import {
  commonGetAPI,
  commonPostAPI,
  commonPutAPI,
} from '@/store/sagas/helper/api.saga';
import {
  BASE_URL,
  CONFIRM_RECEIVE_REQUEST,
  GET_FINISHING_ALTER_LIST,
  GET_QMS_STOCK_FOR_RECEIVE,
  ORG_TREE,
  SEND_TO_ALTER,
} from '@/utils/environment';
import ToastPopUp from '@/utils/Toast.android';
import {type ApiDataItem} from '../DataTableComponent/DataTableComponent';
import DataTableComponent from '../../Components/FinishingAlterDataTableComponent/FinishingAlterDataTableComponent';
import CustomModalButton from '../CustomModalButton/CustomModalButton';
import CustomSubmitButton from '../CustomSubmitButton/CustomSubmitButton';
import SelectLineModal from '../SelectLineModal/SelectLineModal';

import {type Detail, type StockViewItem} from '../ReceiveTab/interface';
import Styles from './style';
import CalendarModal from '../CalendarModal/CalenderModal';
import moment from 'moment';

const FinishingAlterTab: FC = () => {
  const [selectedLine, setSelectedLine] = React.useState<string>('');
  const [selectedLineName, setSelectedLineName] = React.useState<string>('');
  const [lineModalVisible, setLineModalVisible] = React.useState(false);
  const [calendarModalVisible, setCalendarModalVisible] = React.useState(false);
  const [date, setDate] = React.useState('');
  const [dateTime, setDateTime] = React.useState('');
  const [orgTree, setOrgTree] = React.useState([]);
  const [tableData, setTableData] = React.useState<Detail[]>([]);
  const [loader, setLoader] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>('No Line Selected');
  const accessToken = useSelector(
    (state: RootState) => state.users.user.data?.accessToken,
  );
  const [isButtonDisabled, setIsButtonDisabled] =
    React.useState<boolean>(false);

  // Use useRef to store the updated array without re-rendering
  const updatedArrayRef = React.useRef<ApiDataItem[]>([]);

  const handleUpdatedArray = useCallback((updatedArray: ApiDataItem[]) => {
    // Filter out items where qty is "0"
    const filteredArray = updatedArray.filter(
      item => item.qty !== '0' && item.qty !== '',
    );
    if (filteredArray.length === 0) {
      // when error
      let ids = updatedArray.map(item => item.id);

      updatedArrayRef.current = updatedArrayRef.current.filter(
        item => !ids.includes(item.id),
      );
    } else {
      // Create a new array by merging the old ref with the new filtered array
      updatedArrayRef.current = updatedArrayRef.current.map(oldItem => {
        const newItem = filteredArray.find(item => item.id === oldItem.id);
        return newItem != null ? {...oldItem, ...newItem} : oldItem;
      });

      // Add any new items that aren't already in the ref
      const newItems = filteredArray.filter(
        newItem =>
          !updatedArrayRef.current.some(oldItem => oldItem.id === newItem.id),
      );
      updatedArrayRef.current = [...updatedArrayRef.current, ...newItems];
    }
  }, []);

  // Function to fetch data from API
  const fetchData = async () => {
    try {
      setLoader(true);
      const props = {
        url: BASE_URL + '/' + ORG_TREE,
        token: accessToken !== undefined ? accessToken : '',
      };
      const response = await commonGetAPI(props);
      if (response !== undefined) {
        setOrgTree(response.data[0].children);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoader(false);
    }
  };

  // Trigger API call when screen is focused
  useFocusEffect(
    React.useCallback(() => {
      fetchData(); // Call API whenever the screen comes into focus

      // Cleanup function to reset state when the screen is unfocused
      return () => {
        setSelectedLine('');
        setLineModalVisible(false);
        setOrgTree([]);
        setTableData([]);
        setMessage('No Line Selected');
        updatedArrayRef.current = [];
      };
    }, []),
  );

  // Check for internet connectivity and fetch data
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        fetchData();
      } else {
        // Set default values when offline
        setTableData([]);
        setSelectedLine('');
        setLineModalVisible(false);
        setOrgTree([]);
        setLoader(false);
        ToastPopUp('No internet connection.');
      }
    });

    return () => unsubscribe();
  }, []);

  const onClickLeaf = async (id: string, timestamp: string): Promise<any> => {
    try {
      if (id !== '' && timestamp !== '') {
        const formattedDate = moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
        const props = {
          url:
            BASE_URL +
            '/' +
            GET_FINISHING_ALTER_LIST +
            `?lineId=${id}&date=${formattedDate}`,
          token: accessToken !== undefined ? accessToken : '',
        };

        const response = await commonGetAPI(props);

        if (response !== undefined) {
          setSelectedLine(id);
          setTableData(response.data.details);
          setLineModalVisible(false);
          if (response.data.details.length === 0) setMessage('No Data Found. ');
          // setLoader(false)
        }
      } else {
        if (id !== '') {
          setSelectedLine(id);
        }
      }
    } catch (error) {
      console.error('Error during onClickLeaf execution:', error);
      setLoader(false); // Stop loader
    } finally {
      // setDataLoading(false)
      // setLoader(false); // Stop loader
    }
  };

  // Callback to confirm receiving the items using useCallback
  const confirmReceive = useCallback(async () => {
    if (updatedArrayRef.current.length > 0) {
      // Perform your API call or any other action with the updated array
      const itemData = updatedArrayRef.current;
      const filteredData = itemData.map(({id, ...rest}) => rest);

      const allQtyNotZero = filteredData.every((item: any) => item.qty === '0');
      const anyBlankValue = filteredData.every((item: any) => item.qty === '');

      if (allQtyNotZero || anyBlankValue) {
        updatedArrayRef.current = [];
        Alert.alert('Warning', 'No items have been updated.');
      } else {
        const props = {
          url: BASE_URL + '/' + SEND_TO_ALTER,
          token: accessToken !== undefined ? accessToken : '',
          data: filteredData,
        };
        setIsButtonDisabled(true); // Disable the button
        const response = await commonPutAPI(props);

        if (response !== undefined) {
          updatedArrayRef.current = [];
          setTableData([]);
          setSelectedLine('');
          setSelectedLineName('');
          // onClickLeaf(selectedLine);
          ToastPopUp('Submit Successfully.');
        }
      }
    } else {
      // If no items have been updated, show a warning message
      Alert.alert('Warning', 'No items have been updated.');
    }
    setIsButtonDisabled(false); // Re-enable the button after operation
  }, [setSelectedLine, setTableData, setSelectedLineName]);

  const renderItem = (item: StockViewItem) => (
    <DataTableComponent
      buyer="Buyer"
      buyerName={item.item.customer}
      style="Style"
      styleName={item.item.style}
      styleID={item.item.styleId}
      order="PO"
      oderName={item.item.po}
      orderNumber={item.item.orderId}
      showCheckbox={false}
      columnNames={[
        'Color',
        'Size',
        'Receive Qty.',
        'Balance Qty.',
        'Finishing Alter Send Qty.',
      ]}
      onUpdatedArray={handleUpdatedArray}
      rowData={item.item.breakdowns}
      selectedLine={parseInt(selectedLine)}
      dataSelected={dateTime}
    />
  );

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{height: '20%', flexDirection: 'row'}}>
        <CustomModalButton
          buttonStyle={Styles.selectLineDateButton}
          buttonTextStyle={Styles.selectLineDateButtonText}
          onPress={() => {
            setLineModalVisible(true);
          }}
          text={selectedLine !== '' ? selectedLineName : 'Select Line'}
          icon={<Icon name="caret-down" size={25} color="#1C98D8" />}
        />
        <SelectLineModal
          orgTreeData={orgTree}
          setSelectedLine={setSelectedLine}
          lineModalVisible={lineModalVisible}
          setLineModalVisible={setLineModalVisible}
          pageName="receive"
          onClickAble={async (e: number) =>
            await onClickLeaf(e.toString(), date)
          }
          setSelectedLineName={setSelectedLineName}
        />
        <CustomModalButton
          buttonStyle={Styles.selectLineDateButton}
          buttonTextStyle={Styles.selectLineDateButtonText}
          onPress={() => {
            setCalendarModalVisible(true);
          }}
          text={date !== '' ? date : 'Select Date'}
          icon={<Icon name="calendar-o" size={25} color="#1C98D8" />}
        />
        <CalendarModal
          calendarModalVisible={calendarModalVisible}
          setCalendarModalVisible={setCalendarModalVisible}
          setDate={setDate}
          onClickAble={async (e: string) => await onClickLeaf(selectedLine, e)}
          setDateTime={setDateTime}
        />
      </View>
      {tableData.length === 0 ? (
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            // justifyContent: 'center',
          }}>
          <Text style={{fontSize: 16}}>{message} </Text>
        </View>
      ) : (
        <View style={style.flatListContainer}>
          <FlatList
            style={{marginBottom: 100}}
            data={tableData}
            renderItem={renderItem}
            keyExtractor={item => `${Math.random()}` + `${item.varienceId}`}
            ListFooterComponent={<View style={{height: 80}} />}
          />
        </View>
      )}

      <CustomSubmitButton
        icon={<Icon name="send" size={20} color={'white'} />}
        text="CONFIRM RECEIVE"
        onPress={confirmReceive}
        disabled={isButtonDisabled} // Disable based on state
      />
      <Spinner visible={loader} textContent={'Loading...'} />
    </View>
  );
};

export default FinishingAlterTab;

const style = ScaledSheet.create({
  flatListContainer: {
    // flex: 1, // Allow FlatList to take remaining space
    height: '180@s',
  },
});

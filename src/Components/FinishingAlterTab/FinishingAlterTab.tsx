/* eslint-disable */
import React, { type FC, useCallback, useEffect } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import { type RootState } from '@/store';
import { commonGetAPI, commonPutAPI } from '@/store/sagas/helper/api.saga';
import { BASE_URL, GET_FINISHING_ALTER_LIST, ORG_TREE, SEND_TO_ALTER } from '@/utils/environment';
import ToastPopUp from '@/utils/Toast.android';
import CustomModalButton from '../CustomModalButton/CustomModalButton';
import CustomSubmitButton from '../CustomSubmitButton/CustomSubmitButton';
import { type ApiDataItem } from '../DataTableComponent/DataTableComponent';
import FinishingAlterDataTableComponent from '../FinishingAlterDataTableComponent/FinishingAlterDataTableComponent';
import SelectLineModal from '../SelectLineModal/SelectLineModal';

import { type AlterAPIDetails } from './interface';
import Styles from './style';
const FinishingAlterTab: FC = () => {
  const [selectedLine, setSelectedLine] = React.useState<string>('');
  const [selectedLineName, setSelectedLineName] = React.useState<string>('');
  const [lineModalVisible, setLineModalVisible] = React.useState(false);
  const [orgTree, setOrgTree] = React.useState([]);
  const accessToken = useSelector((state: RootState) => state.users.user.data?.accessToken);
  const [tableData, setTableData] = React.useState<AlterAPIDetails[]>([]);
  const [message, setMessage] = React.useState<string>('No Line Selected');

  const updatedArrayRef = React.useRef<ApiDataItem[]>([]);

  // Function to fetch data
  const fetchDataLineWise = async (lineId: string) => {
    try {
      // const formattedDate = moment(date).format('YYYY-MM-DD HH:mm:ss');
      const props = {
        url: BASE_URL + '/' + GET_FINISHING_ALTER_LIST + `?lineId=${lineId}`,
        token: accessToken !== undefined ? accessToken : ''
      };
      const response = await commonGetAPI(props);

      console.log('response >> . ', response)

      if (response !== undefined) {

        if (response.data.details.length === 0) setMessage('No Data Found. ')

        setTableData(response.data.details);
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to fetch data from API
  const fetchData = async () => {
    try {
      // setLoading(true);
      const props = {
        url: BASE_URL + '/' + ORG_TREE,
        token: accessToken !== undefined ? accessToken : ''
      };
      const response = await commonGetAPI(props);
      if (response !== undefined) {
        setOrgTree(response.data[0].children);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      // setLoading(false);
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
        setMessage('No Line Selected.')
        updatedArrayRef.current = [];
      };
    }, [])
  );

  const handleUpdatedArray = useCallback((updatedArray: ApiDataItem[]) => {
    // Filter out items where qty is "0"
    const filteredArray = updatedArray.filter(item => item.qty !== 0);

    // Create a new array by merging the old ref with the new filtered array
    updatedArrayRef.current = updatedArrayRef.current.map(oldItem => {
      const newItem = filteredArray.find(item => item.id === oldItem.id);
      return newItem != null ? { ...oldItem, ...newItem } : oldItem;
    });

    // Add any new items that aren't already in the ref
    const newItems = filteredArray.filter(
      newItem => !updatedArrayRef.current.some(oldItem => oldItem.id === newItem.id)
    );

    updatedArrayRef.current = [...updatedArrayRef.current, ...newItems];
  }, []);



  const onClickLeaf = async (id: string): Promise<any> => {
    try {

      console.log('id >>> .. L >> ', id)

      fetchDataLineWise(id);

      // const props = {
      //   url: BASE_URL + '/' + GET_QMS_STOCK_FOR_RECEIVE + id,
      //   token: accessToken !== undefined ? accessToken : ''
      // };

      // // setLoader(true)
      // // setDataLoading(true)

      // const response = await commonGetAPI(props);

      // console.log('response', response);

      // if (response !== undefined) {
      //   // setSelectedLine(id);
      //   // setTableData(response.data.details);
      //   // setLineModalVisible(false);
      //   // setLoader(false)
      // }
    } catch (error) {
      console.error('Error during onClickLeaf execution:', error);
      // setLoader(false); // Stop loader
    }
  };


  const renderItem = ({ item }: { item: AlterAPIDetails }) => {
    return (
      <FinishingAlterDataTableComponent
        buyer={'Buyer Name'}
        buyerName={item.customer}
        style={'Style Name'}
        styleName={item.style}
        styleID={item.styleId}
        order={'Order Number'}
        orderNumber={item.po}
        orderID={item.orderId}
        oderName={item.po}
        columnNames={['Color', 'Size', 'Receive Qty.', 'Finishing Alter Send Qty.']}
        selectedLine={selectedLine}
        rowData={item.breakdowns}
        onUpdatedArray={handleUpdatedArray}
      />
    );
  };

  // Callback to confirm receiving the items using useCallback
  const confirmReceive = useCallback(async () => {
    if (updatedArrayRef.current.length > 0) {
      // Perform your API call or any other action with the updated array

      const filteredDataZero = updatedArrayRef.current.filter((item: any) => item.qty !== '0');
      const filteredData = filteredDataZero.map(({ id, ...rest }) => rest);
      const allQtyNotZero = filteredData.every((item: any) => item.qty === '0');
      const allQtyNotSpace = filteredData.every((item: any) => item.qty === '');


      if (allQtyNotZero || allQtyNotSpace) {
        updatedArrayRef.current = [];
        Alert.alert('Warning', 'No items have been updated.');
      } else {
        const props = {
          url: BASE_URL + '/' + SEND_TO_ALTER,
          token: accessToken !== undefined ? accessToken : '',
          data: filteredData
        };

        const response = await commonPutAPI(props);

        if (response !== undefined) {
          updatedArrayRef.current = [];
          setSelectedLineName('')
          setSelectedLine('')
          setTableData([])
          ToastPopUp('Submit Successfully.');
        }
      }
    } else {
      // If no items have been updated, show a warning message
      Alert.alert('Warning', 'No items have been updated.');
    }
  }, [setSelectedLineName, setSelectedLine, setTableData]);


  return (
    <View style={Styles.alterResendTabContainer}>
      <View style={Styles.selectButtonContainer}>
        <CustomModalButton
          buttonStyle={Styles.selectLineDateButton}
          buttonTextStyle={Styles.selectLineDateButtonText}
          onPress={() => {
            setLineModalVisible(true);
          }}
          text={selectedLine !== '' ? selectedLineName : 'Select Line'}
          icon={<Icon name="caret-down" size={25} color="#1C98D8" />}
        />

      </View>
      {/* Modal for TreeSelect */}
      <SelectLineModal
        orgTreeData={orgTree}
        setSelectedLine={setSelectedLine}
        lineModalVisible={lineModalVisible}
        setLineModalVisible={setLineModalVisible}
        pageName={''}
        setSelectedLineName={setSelectedLineName}
        onClickAble={async (e: number) => await onClickLeaf(e.toString())}
      />

      {tableData.length == 0 ? (
        <View
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Text style={{ fontSize: 16 }}>{message}</Text>
        </View>
      ) : (
        <View style={style.flatListContainer}>
          <FlatList
            style={{ marginBottom: 100 }}
            data={tableData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}

      <CustomSubmitButton
        icon={<Icon name="send" size={20} color={'white'} />}
        text="SEND TO ALTER"
        onPress={confirmReceive}
      />
    </View>
  );
};

const style = ScaledSheet.create({
  flatListContainer: {
    // flex: 1, // Allow FlatList to take remaining space
    height: '180@s'
  }
});

export default FinishingAlterTab;

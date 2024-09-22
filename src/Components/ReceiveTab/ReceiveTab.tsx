import React, { useCallback, type FC } from 'react';
import { Text, View, FlatList, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DataTableComponent, {
  ApiDataItem,
} from '../../Components/DataTableComponent/DataTableComponent';
import SelectLineModal from '../SelectLineModal/SelectLineModal';
import CustomSubmitButton from '../CustomSubmitButton/CustomSubmitButton';
import CustomModalButton from '../CustomModalButton/CustomModalButton';
import Styles from './style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Detail, StockViewItem } from './interface';
import {
  BASE_URL,
  CONFIRM_RECEIVE_REQUEST,
  GET_QMS_STOCK_FOR_RECEIVE,
  ORG_TREE
} from '@/utils/environment';
import { commonGetAPI, commonPostAPI } from '@/store/sagas/helper/api.saga';
import { useFocusEffect } from '@react-navigation/native';
import ToastPopUp from '@/utils/Toast.android';
import { scale, ScaledSheet } from 'react-native-size-matters'
import Spinner from 'react-native-loading-spinner-overlay';



const ReceiveTab: FC = () => {


  const [selectedLine, setSelectedLine] = React.useState<string>('');
  const [selectedLineName, setSelectedLineName] = React.useState<string>('');
  const [lineModalVisible, setLineModalVisible] = React.useState(false);
  const [orgTree, setOrgTree] = React.useState([]);
  const [tableData, setTableData] = React.useState<Detail[]>([]);
  const [loader, setLoader] = React.useState<boolean>(false);
  const [dataLoading, setDataLoading] = React.useState<boolean>(false);

  const accessToken = useSelector(
    (state: RootState) => state.users.user.data?.accessToken,
  );

  // Use useRef to store the updated array without re-rendering
  const updatedArrayRef = React.useRef<ApiDataItem[]>([]);

  const handleUpdatedArray = useCallback((updatedArray: ApiDataItem[]) => {
    // Filter out items where qty is "0"
    const filteredArray = updatedArray.filter(item => item.qty !== 0);

    // Create a new array by merging the old ref with the new filtered array
    updatedArrayRef.current = updatedArrayRef.current.map(oldItem => {
      const newItem = filteredArray.find(item => item.id === oldItem.id);
      return newItem ? { ...oldItem, ...newItem } : oldItem;
    });

    // Add any new items that aren't already in the ref
    const newItems = filteredArray.filter(
      newItem => !updatedArrayRef.current.some(oldItem => oldItem.id === newItem.id)
    );

    updatedArrayRef.current = [...updatedArrayRef.current, ...newItems];
  }, []);

  // Function to fetch data from API
  const fetchData = async () => {
    try {
      setLoader(true);
      let props = {
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
      setLoader(false);
    }
  };

  // Trigger API call when screen is focused
  useFocusEffect(
    React.useCallback(() => {
      fetchData(); // Call API whenever the screen comes into focus

      // Cleanup function to reset state when the screen is unfocused
      return () => {

        console.log("funkk")

        setSelectedLine('');
        setLineModalVisible(false);
        setOrgTree([]);
        setTableData([]);
        updatedArrayRef.current = [];
      };
    }, []),
  );

  const onClickLeaf = async (id: string): Promise<any> => {
    try {

      let props = {
        url: BASE_URL + '/' + GET_QMS_STOCK_FOR_RECEIVE + id,
        token: accessToken !== undefined ? accessToken : '',
      };

      // setLoader(true)
      // setDataLoading(true)

      let response = await commonGetAPI(props);


      console.log('response', response)

      if (response !== undefined) {
        setSelectedLine(id)
        setTableData(response.data.details);
        setLineModalVisible(false)
        // setLoader(false)
      }
    } catch (error) {
      console.error('Error during onClickLeaf execution:', error);
      setLoader(false); // Stop loader
    } finally {
      // setDataLoading(false)
      //setLoader(false); // Stop loader
    }
  };

  // Callback to confirm receiving the items using useCallback
  const confirmReceive = useCallback(async () => {
    if (updatedArrayRef.current.length > 0) {
      // Perform your API call or any other action with the updated array
      let itemData = updatedArrayRef.current;
      const filteredData = itemData.map(({ id, ...rest }) => rest);

      const props = {
        url: BASE_URL + '/' + CONFIRM_RECEIVE_REQUEST,
        token: accessToken !== undefined ? accessToken : '',
        data: filteredData
      };

      // dispatch(startLoader())

      let response = await commonPostAPI(props);

      if (response !== undefined) {

        onClickLeaf(selectedLine)
        ToastPopUp('Submit Successfully.');

      }
    } else {
      // If no items have been updated, show a warning message
      Alert.alert('Warning', 'No items have been updated.');
    }
  }, [selectedLine]);

  const renderItem = (item: StockViewItem) => (
    <DataTableComponent
      buyer="Buyer"
      buyerName={item.item.customer}
      style="Style"
      styleName={item.item.style}
      styleID={item.item.styleId}
      order="PO"
      orderNumber={item.item.orderId}
      showCheckbox={true}
      columnNames={[
        'Color',
        'Size',
        'QC Qty.',
        'Total Receive',
        'Balance Qty.',
        'Receive Qty.',
      ]}
      onUpdatedArray={handleUpdatedArray}
      rowData={item.item.breakdowns}
      selectedLine={parseInt(selectedLine)} />
  );


  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>

      <View style={{ height: '20%' }}>
        <CustomModalButton
          buttonStyle={Styles.selectLineDateButton}
          buttonTextStyle={Styles.selectLineDateButtonText}
          onPress={() => setLineModalVisible(true)}
          text={selectedLine !== '' ? selectedLineName : 'Select Line'}
          icon={<Icon name="caret-down" size={25} color="#1C98D8" />}
        />
        <SelectLineModal
          orgTreeData={orgTree}
          setSelectedLine={setSelectedLine}
          lineModalVisible={lineModalVisible}
          setLineModalVisible={setLineModalVisible}
          pageName="receive"
          onClickAble={(e: number) => onClickLeaf(e.toString())} setSelectedLineName={setSelectedLineName} />
      </View>
      {selectedLine === '' || dataLoading === true ? (
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            // justifyContent: 'center',
          }}>
          <Text style={{ fontSize: 16 }}>{dataLoading ? 'Loading..' : 'No Line Selected'} </Text>
        </View>
      ) : (
        <View style={style.flatListContainer}>
          <FlatList
            data={tableData}
            renderItem={renderItem}
            keyExtractor={item => `${Math.random()}` + `${item.varienceId}`}
            ListFooterComponent={<View style={{ height: 80 }} />}
          />
        </View>
      )
      }

      <CustomSubmitButton
        icon={<Icon name="tencent-weibo" size={20} color={'white'} />}
        text="CONFIRM RECEIVE"
        onPress={confirmReceive}
      />
      <Spinner visible={loader} textContent={'Loading...'} />
    </View >
  );
};

export default ReceiveTab;

const style = ScaledSheet.create({
  flatListContainer: {
    //flex: 1, // Allow FlatList to take remaining space
    height: '180@s'
  },

});
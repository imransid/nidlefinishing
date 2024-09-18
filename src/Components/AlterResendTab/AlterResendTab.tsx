import React, { useCallback, useEffect, type FC } from 'react';
import { View, FlatList, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DataTableComponent, { ApiDataItem } from '../../Components/DataTableComponent/DataTableComponent';
import TreeIcon from 'react-native-vector-icons/Ionicons';
import CalendarModal from '../CalendarModal/CalenderModal';
import Styles from './style';
import CustomSubmitButton from '../CustomSubmitButton/CustomSubmitButton';
import CustomModalButton from '../CustomModalButton/CustomModalButton';
import SelectLineModal from '../SelectLineModal/SelectLineModal';
import { commonGetAPI, commonPutAPI } from '@/store/sagas/helper/api.saga';
import { BASE_URL, GET_FINISHING_ALTER_LIST, GET_FINISHING_ALTER_RECEIVE_LIST, ORG_TREE, SEND_TO_FINISHING_ALTER_RECEIVE } from '@/utils/environment';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { AlterAPIDetails } from '../FinishingAlterTab/interface';
import { RootState } from '@/store';
import moment from 'moment';
import { Detail, StockViewItem } from '../ReceiveTab/interface';
import ToastPopUp from '@/utils/Toast.android';
const AlterResendTab: FC = () => {
  const [lineModalVisible, setLineModalVisible] = React.useState(false);
  const [selectedLine, setSelectedLine] = React.useState<string>('');
  const [calendarModalVisible, setCalendarModalVisible] = React.useState(false);
  const [selectedDate, setDate] = React.useState('');

  const [orgTree, setOrgTree] = React.useState([]);
  const accessToken = useSelector((state: RootState) => state.users.user.data?.accessToken);
  const [tableData, setTableData] = React.useState<Detail[]>([]);



  const updatedArrayRef = React.useRef<ApiDataItem[]>([]);

  // Function to fetch data
  const fetchDataLineWise = async (lineId: string, date: string) => {
    try {
      const formattedDate = moment(date).format('YYYY-MM-DD HH:mm:ss');

      let props = {
        url:
          BASE_URL + '/' + GET_FINISHING_ALTER_RECEIVE_LIST + `?lineId=${lineId}&date=${formattedDate}`,
        token: accessToken !== undefined ? accessToken : '',
      };
      let response = await commonGetAPI(props);

      if (response !== undefined) {
        setTableData(response.data.details)
        console.log(tableData, "tableData")
      }

      console.log('response', response.data)
      //setTestData(data); // Assuming the API response is directly compatible with testData
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // UseEffect to call API when selectedLine or selectedDate changes
  useEffect(() => {

    if (selectedLine && selectedDate) {
      fetchDataLineWise(selectedLine, selectedDate);
    }
  }, [selectedLine, selectedDate]);


  // Function to fetch data from API
  const fetchData = async () => {
    try {
      // setLoading(true);
      let props = {
        url: BASE_URL + '/' + ORG_TREE,
        token: accessToken !== undefined ? accessToken : '',
      };
      let response = await commonGetAPI(props);
      if (response !== undefined) {
        setOrgTree(response.data[0].children);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      // setLoading(false);
    }
  };


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
      newItem =>
        !updatedArrayRef.current.some(oldItem => oldItem.id === newItem.id),
    );

    updatedArrayRef.current = [...updatedArrayRef.current, ...newItems];
  }, []);

  // Trigger API call when screen is focused
  useFocusEffect(
    React.useCallback(() => {
      fetchData(); // Call API whenever the screen comes into focus
    }, []),
  );


  // Callback to confirm receiving the items using useCallback
  const confirmReceive = useCallback(async () => {
    if (updatedArrayRef.current.length > 0) {
      // Perform your API call or any other action with the updated array
      let itemData = updatedArrayRef.current;
      const filteredData = itemData.map(({ id, ...rest }) => rest);

      let props = {
        url: BASE_URL + '/' + SEND_TO_FINISHING_ALTER_RECEIVE,
        token: accessToken !== undefined ? accessToken : '',
        data: filteredData,
      };

      let response = await commonPutAPI(props);
      if (response !== undefined) ToastPopUp('Submit Successfully.');

    } else {
      // If no items have been updated, show a warning message
      Alert.alert('Warning', 'No items have been updated.');
    }
  }, []);



  const renderItem = (item: StockViewItem) => (
    <DataTableComponent
      buyer="Buyer"
      buyerName={item.item.customer}
      style="Style"
      styleName={item.item.style}
      order="PO"
      orderNumber={item.item.orderId}
      showCheckbox={true}
      columnNames={[
        'Color',
        'Size',
        'Input Qty.',
        'QC Qty.',
        'Total Receive',
        'Balance Qty.',
        'Receive Qty.',
      ]}
      rowData={item.item.breakdowns}
      onUpdatedArray={handleUpdatedArray}
      styleID={item.item.styleId} />
  );

  return (
    <View style={Styles.alterResendTabContainer}>
      <View style={Styles.selectButtonContainer}>
        <CustomModalButton
          buttonStyle={Styles.selectLineDateButton}
          buttonTextStyle={Styles.selectLineDateButtonText}
          onPress={() => setLineModalVisible(true)}
          text={selectedLine !== '' ? selectedLine : 'Select Line'}
          icon={<Icon name="caret-down" size={25} color="#1C98D8" />}
        />
        <CustomModalButton
          buttonStyle={Styles.selectLineDateButton}
          buttonTextStyle={Styles.selectLineDateButtonText}
          onPress={() => setCalendarModalVisible(true)}
          text={selectedDate !== '' ? selectedDate : 'Select Date'}
          icon={
            <TreeIcon name="calendar-clear-outline" size={25} color="#1C98D8" />
          }
        />
      </View>
      {/* Modal for TreeSelect */}
      <SelectLineModal
        orgTreeData={orgTree}
        setSelectedLine={setSelectedLine}
        lineModalVisible={lineModalVisible}
        setLineModalVisible={setLineModalVisible}
        pageName={''}
      />
      <CalendarModal
        setDate={setDate}
        calendarModalVisible={calendarModalVisible}
        setCalendarModalVisible={setCalendarModalVisible}
      />
      {selectedLine === '' && selectedDate === '' ? (
        <View
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ fontSize: 16 }}>No Line & Date Selected</Text>
        </View>
      ) : (
        <FlatList
          style={{ marginBottom: 100 }}
          data={tableData}
          renderItem={renderItem}
          keyExtractor={item => `${Math.random()}`}
        />
      )}

      <CustomSubmitButton
        icon={<Icon name="send" size={20} color={'white'} />}
        text="CONFIRM FINISHING ALTER RECEIVE" onPress={confirmReceive} />
    </View>
  );
};

export default AlterResendTab;

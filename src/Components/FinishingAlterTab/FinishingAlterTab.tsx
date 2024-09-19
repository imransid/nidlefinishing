import React, { useCallback, useEffect, useState, type FC } from 'react';
import { Text, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TreeIcon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import moment from 'moment';

import { type RootState } from '@/store';
import { commonGetAPI, commonPutAPI } from '@/store/sagas/helper/api.saga';
import { BASE_URL, GET_FINISHING_ALTER_LIST, ORG_TREE, SEND_TO_ALTER } from '@/utils/environment';
import ToastPopUp from '@/utils/Toast.android';

import CalendarModal from '../CalendarModal/CalenderModal';
import CustomModalButton from '../CustomModalButton/CustomModalButton';
import CustomSubmitButton from '../CustomSubmitButton/CustomSubmitButton';
import { type ApiDataItem } from '../DataTableComponent/DataTableComponent';
import FinishingAlterDataTableComponent from '../FinishingAlterDataTableComponent/FinishingAlterDataTableComponent';
import SelectLineModal from '../SelectLineModal/SelectLineModal';
import CustomSubmitButton from '../CustomSubmitButton/CustomSubmitButton';
import CustomModalButton from '../CustomModalButton/CustomModalButton';
import {
  commonGetAPI,
  commonPostAPI,
  commonPutAPI,
} from '@/store/sagas/helper/api.saga';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import {
  BASE_URL,
  CONFIRM_RECEIVE_REQUEST,
  GET_FINISHING_ALTER_LIST,
  ORG_TREE,
  SEND_TO_ALTER,
} from '@/utils/environment';
import moment from 'moment';
import { AlterAPIDetails } from './interface';
import { ApiDataItem } from '../DataTableComponent/DataTableComponent';
import ToastPopUp from '@/utils/Toast.android';
import { ScaledSheet } from 'react-native-size-matters';
const FinishingAlterTab: FC = () => {
  // GET : http://localhost:8081/api/v1/getFinishingAlterList?lineId=2002&date=2024-09-12 12:00:15

  const [selectedLine, setSelectedLine] = React.useState<string>('');
  const [selectedLineName, setSelectedLineName] = React.useState<string>('');
  const [lineModalVisible, setLineModalVisible] = React.useState(false);
  const [calendarModalVisible, setCalendarModalVisible] = React.useState(false);
  const [selectedDate, setDate] = React.useState('');
  const [orgTree, setOrgTree] = React.useState([]);
  const accessToken = useSelector(
    (state: RootState) => state.users.user.data?.accessToken,
  );
  const [tableData, setTableData] = React.useState<AlterAPIDetails[]>([]);

  const updatedArrayRef = React.useRef<ApiDataItem[]>([]);

  // Function to fetch data
  const fetchDataLineWise = async (lineId: string, date: string) => {
    try {
      const formattedDate = moment(date).format('YYYY-MM-DD HH:mm:ss');
      console.log('lineId', lineId, 'date', formattedDate);
      let props = {
        url:
          BASE_URL +
          '/' +
          GET_FINISHING_ALTER_LIST +
          `?lineId=${lineId}&date=${formattedDate}`,
        token: accessToken !== undefined ? accessToken : '',
      };
      const response = await commonGetAPI(props);

      if (response !== undefined) {
        setTableData(response.data.details);
      }

      console.log('response', response.data);
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
        setDate('');
        updatedArrayRef.current = [];
      };
    }, []),
  );

  const handleUpdatedArray = useCallback((updatedArray: ApiDataItem[]) => {
    // Filter out items where qty is "0"
    const filteredArray = updatedArray.filter(item => item.qty !== 0);

    console.log(updatedArray, 'updatedArray', filteredArray, 'filteredArray');

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
        columnNames={[
          'Color',
          'Size',
          'Receive Qty.',
          'Finishing Alter Send Qty.',
        ]}
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

      const filteredDataZero = updatedArrayRef.current.filter(
        (item: any) => item.qty !== '0',
      );

      const filteredData = filteredDataZero.map(({ id, ...rest }) => rest);

      const props = {
        url: BASE_URL + '/' + SEND_TO_ALTER,
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
        <CustomModalButton
          buttonStyle={Styles.selectLineDateButton}
          buttonTextStyle={Styles.selectLineDateButtonText}
          onPress={() => {
            setCalendarModalVisible(true);
          }}
          text={selectedDate !== '' ? selectedDate : 'Select Date'}
          icon={<TreeIcon name="calendar-clear-outline" size={25} color="#1C98D8" />}
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
            justifyContent: 'center'
          }}>
          <Text style={{ fontSize: 16 }}>No Line & Date Selected</Text>
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
    //flex: 1, // Allow FlatList to take remaining space
    height: '180@s',
  },
});

export default FinishingAlterTab;

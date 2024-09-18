import React, { useEffect, type FC } from 'react';
import { View, FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DataTableComponent, { ApiDataItem } from '../../Components/DataTableComponent/DataTableComponent';
import TreeIcon from 'react-native-vector-icons/Ionicons';
import CalendarModal from '../CalendarModal/CalenderModal';
import Styles from './style';
import CustomSubmitButton from '../CustomSubmitButton/CustomSubmitButton';
import CustomModalButton from '../CustomModalButton/CustomModalButton';
import SelectLineModal from '../SelectLineModal/SelectLineModal';
import { commonGetAPI } from '@/store/sagas/helper/api.saga';
import { BASE_URL, GET_FINISHING_ALTER_LIST, GET_FINISHING_ALTER_RECEIVE_LIST, ORG_TREE } from '@/utils/environment';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { AlterAPIDetails } from '../FinishingAlterTab/interface';
import { RootState } from '@/store';
import moment from 'moment';
const AlterResendTab: FC = () => {

  const testData = [
    {
      color: 'White',
      size: 'M',
      inputQty: 1000,
      qcQty: 900,
      totalReceive: 500,
      balanceQty: 500,
      receiveQty: 0,
    },
    {
      color: 'Black',
      size: 'L',
      inputQty: 2000,
      qcQty: 1900,
      totalReceive: 1000,
      balanceQty: 1000,
      receiveQty: 0,
    },
  ];
  const [lineModalVisible, setLineModalVisible] = React.useState(false);
  const [selectedLine, setSelectedLine] = React.useState<string>('');
  const [calendarModalVisible, setCalendarModalVisible] = React.useState(false);
  const [selectedDate, setDate] = React.useState('');

  const [orgTree, setOrgTree] = React.useState([]);
  const accessToken = useSelector((state: RootState) => state.users.user.data?.accessToken);
  const [tableData, setTableData] = React.useState<AlterAPIDetails[]>([]);







  const updatedArrayRef = React.useRef<ApiDataItem[]>([]);

  // Function to fetch data
  const fetchDataLineWise = async (lineId: string, date: string) => {
    try {
      const formattedDate = moment(date).format('YYYY-MM-DD HH:mm:ss');
      console.log('lineId', lineId, 'date', formattedDate);
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

  // Trigger API call when screen is focused
  useFocusEffect(
    React.useCallback(() => {
      fetchData(); // Call API whenever the screen comes into focus
    }, []),
  );



  const renderItem = ({ item }: { item: number }) => (
    <DataTableComponent
      buyer="Buyer"
      buyerName="Brothers Fashion Ltd."
      style="Style"
      styleName="Brother-5060OD"
      order="PO"
      orderNumber="PO-5623147855"
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
      rowData={testData}
    />
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
          keyExtractor={(item, index) => index.toString()}
        />
      )}

      <CustomSubmitButton
        icon={<Icon name="send" size={20} color={'white'} />}
        text="CONFIRM FINISHING ALTER RECEIVE" onPress={undefined} />
    </View>
  );
};

export default AlterResendTab;

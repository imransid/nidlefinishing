import React, { useCallback, type FC } from 'react';
import { Text, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DataTableComponent, { ApiDataItem } from '../../Components/DataTableComponent/DataTableComponent';
import SelectLineModal from '../SelectLineModal/SelectLineModal';
import { Detail, StockViewItem } from './interface';
import { commonGetAPI } from '@/store/sagas/helper/api.saga';
import { BASE_URL, GET_QMS_STOCK_FOR_RECEIVE, ORG_TREE } from '@/utils/environment';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const ReceiveTab: FC = () => {
  const [selectedLine, setSelectedLine] = React.useState<string>('');
  const [lineModalVisible, setLineModalVisible] = React.useState(false);
  const [orgTree, setOrgTree] = React.useState([]);
  const [tableData, setTableData] = React.useState<Detail[]>([]);
  const accessToken = useSelector((state: RootState) => state.users.user.data?.accessToken);

  // Use useRef to store the updated array without re-rendering
  const updatedArrayRef = React.useRef<ApiDataItem[]>([]);


  const handleUpdatedArray = useCallback((updatedArray: ApiDataItem[]) => {
    // Filter out items where qty is "0"
    const filteredArray = updatedArray.filter(item => item.qty !== "0");

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
      // setLoading(true);
      let props = {
        url: BASE_URL + '/' + ORG_TREE,
        token: accessToken !== undefined ? accessToken : ''
      }
      let response = await commonGetAPI(props);
      if (response !== undefined) {
        setOrgTree(response.data[0].children)
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
    }, [])
  );


  const onClickLeaf = async (id: string): Promise<any> => {
    try {
      let props = {
        url: BASE_URL + '/' + GET_QMS_STOCK_FOR_RECEIVE + '2002',//data.item.id,
        token: accessToken !== undefined ? accessToken : ''
      }
      let response = await commonGetAPI(props);

      if (response !== undefined) {
        setTableData(response.data.details)
      }

    } catch (error) {
      console.error('Error during onClickLeaf execution:', error);
      // setLoader(false); // Stop loader
    } finally {
      // setLoader(false); // Stop loader
    }
  };


  // Callback to confirm receiving the items using useCallback
  const confirmReceive = useCallback(() => {
    if (updatedArrayRef.current.length > 0) {
      // Perform your API call or any other action with the updated array
      console.log('Confirmed Receive for:', updatedArrayRef.current);

      // Show a success message
      Alert.alert('Success', 'Items received successfully.');
    } else {
      // If no items have been updated, show a warning message
      Alert.alert('Warning', 'No items have been updated.');
    }
  }, []);




  const renderItem = (item: StockViewItem) => {

    return <DataTableComponent
      buyer="Buyer"
      buyerName={item.item.customer}
      style="Style"
      styleName={item.item.style}
      order="PO"
      orderNumber="PO-5623147855"
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
    />
  };

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <TouchableOpacity
        style={{
          width: '40%',
          height: 50,
          borderRadius: 10,
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: '#E5E5E5',
          marginTop: 20,
          marginLeft: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}
        onPress={() => setLineModalVisible(true)}>
        <Text style={{ fontSize: 16, color: '#000' }}>Select Line</Text>
        <Icon name="caret-down" size={25} color="#1C98D8" />
      </TouchableOpacity>

      {/* Modal for TreeSelect */}
      <SelectLineModal
        orgTreeData={orgTree}
        setSelectedLine={setSelectedLine}
        lineModalVisible={lineModalVisible}
        setLineModalVisible={setLineModalVisible}
        pageName="receive"
        onClickAble={(e: number) => onClickLeaf(e.toString())}

      />
      <FlatList
        style={{ marginBottom: 100 }}
        data={tableData}
        renderItem={renderItem}
        keyExtractor={(item) => `${Math.random()}` + `${item.varienceId}`}
      />

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 50,
          backgroundColor: '#3C4FE9',
          flexDirection: 'row',
        }}
        onPress={confirmReceive}>
        <Icon name="tencent-weibo" size={20} color={'white'} />
        <Text style={{ color: 'white', marginStart: 10 }}>CONFIRM RECEIVE</Text>
      </TouchableOpacity>
    </View >
  );
};

export default ReceiveTab;

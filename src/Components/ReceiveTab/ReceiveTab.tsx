import React, { type FC } from 'react';
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DataTableComponent from '../../Components/DataTableComponent/DataTableComponent';
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
  const [modalVisible, setModalVisible] = React.useState(false);
  const [orgTree, setOrgTree] = React.useState([]);
  const [tableData, setTableData] = React.useState<Detail[]>([]);

  const accessToken = useSelector((state: RootState) => state.users.user.data?.accessToken);

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
        }}>
        <Icon name="tencent-weibo" size={20} color={'white'} />
        <Text style={{ color: 'white', marginStart: 10 }}>CONFIRM RECEIVE</Text>
      </TouchableOpacity>
    </View >
  );
};

export default ReceiveTab;

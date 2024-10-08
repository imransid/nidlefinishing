/* eslint-disable */
import React, { type FC, useCallback } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import { type RootState } from '@/store';
import { commonGetAPI, commonPostAPI } from '@/store/sagas/helper/api.saga';
import {
  BASE_URL,
  CONFIRM_RECEIVE_REQUEST,
  GET_QMS_STOCK_FOR_RECEIVE,
  ORG_TREE
} from '@/utils/environment';
import ToastPopUp from '@/utils/Toast.android';

import DataTableComponent, {
  type ApiDataItem
} from '../../Components/DataTableComponent/DataTableComponent';
import CustomModalButton from '../CustomModalButton/CustomModalButton';
import CustomSubmitButton from '../CustomSubmitButton/CustomSubmitButton';
import SelectLineModal from '../SelectLineModal/SelectLineModal';

import { type Detail, type StockViewItem } from './interface';
import Styles from './style';

const ReceiveTab: FC = () => {
  const [selectedLine, setSelectedLine] = React.useState<string>('');
  const [selectedLineName, setSelectedLineName] = React.useState<string>('');
  const [lineModalVisible, setLineModalVisible] = React.useState(false);
  const [orgTree, setOrgTree] = React.useState([]);
  const [tableData, setTableData] = React.useState<Detail[]>([]);
  const accessToken = useSelector((state: RootState) => state.users.user.data?.accessToken);

  // Use useRef to store the updated array without re-rendering
  const updatedArrayRef = React.useRef<ApiDataItem[]>([]);

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
    }, [])
  );

  const onClickLeaf = async (id: string): Promise<any> => {
    try {
      const props = {
        url: BASE_URL + '/' + GET_QMS_STOCK_FOR_RECEIVE + '2002', // data.item.id,
        token: accessToken !== undefined ? accessToken : ''
      };
      const response = await commonGetAPI(props);

      if (response !== undefined) {
        setTableData(response.data.details);
      }
    } catch (error) {
      console.error('Error during onClickLeaf execution:', error);
      // setLoader(false); // Stop loader
    } finally {
      // setLoader(false); // Stop loader
    }
  };

  // Callback to confirm receiving the items using useCallback
  const confirmReceive = useCallback(async () => {
    if (updatedArrayRef.current.length > 0) {
      // Perform your API call or any other action with the updated array
      const itemData = updatedArrayRef.current;
      const filteredData = itemData.map(({ id, ...rest }) => rest);

      const props = {
        url: BASE_URL + '/' + CONFIRM_RECEIVE_REQUEST,
        token: accessToken !== undefined ? accessToken : '',
        data: filteredData
      };

      const response = await commonPostAPI(props);

      if (response !== undefined) ToastPopUp('Submit Successfully.');
    } else {
      // If no items have been updated, show a warning message
      Alert.alert('Warning', 'No items have been updated.');
    }
  }, []);

  const renderItem = (item: StockViewItem) => {
    return (
      <DataTableComponent
        buyer="Buyer"
        buyerName={item.item.customer}
        style="Style"
        styleName={item.item.style}
        styleID={item.item.styleId}
        order="PO"
        orderNumber={item.item.orderId}
        showCheckbox={true}
        columnNames={['Color', 'Size', 'QC Qty.', 'Total Receive', 'Balance Qty.', 'Receive Qty.']}
        onUpdatedArray={handleUpdatedArray}
        rowData={item.item.breakdowns}
      />
    );
  };

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <CustomModalButton
        buttonStyle={Styles.selectLineDateButton}
        buttonTextStyle={Styles.selectLineDateButtonText}
        onPress={() => {
          setLineModalVisible(true);
        }}
        text={selectedLineName !== '' ? selectedLineName : 'Select Line'}
        icon={<Icon name="caret-down" size={25} color="#1C98D8" />}
      />
      {/* Modal for TreeSelect */}
      <SelectLineModal
        orgTreeData={orgTree}
        setSelectedLine={setSelectedLine}
        lineModalVisible={lineModalVisible}
        setLineModalVisible={setLineModalVisible}
        pageName="receive"
        setSelectedLineName={setSelectedLineName}
        onClickAble={async (e: number) => await onClickLeaf(e.toString())}
      />
      {selectedLineName === '' ? (
        <View
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Text style={{ fontSize: 16 }}>No Line Selected</Text>
        </View>
      ) : (
        <FlatList
          style={{ marginBottom: 60 }}
          data={tableData}
          renderItem={renderItem}
          keyExtractor={item => `${Math.random()}` + `${item.varienceId}`}
        />
      )}

      <CustomSubmitButton
        icon={<Icon name="tencent-weibo" size={20} color={'white'} />}
        text="CONFIRM RECEIVE"
        onPress={confirmReceive}
      />
    </View>
  );
};

export default ReceiveTab;

/* eslint-disable */
import React, { type FC, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import { type RootState } from '@/store';
import { commonGetAPI } from '@/store/sagas/helper/api.saga';
import { BASE_URL, SUMMARY } from '@/utils/environment';

import Styles from '../DataTableComponent/styles';

interface DataItem {
  lineName: string;
  customer: string;
  style: string;
  po: string;
  color: string;
  qty: number;
  totalPass: number;
  totalReceived: number;
  finishAlter: number;
  finishAlterReceive: number;
}

const TodaySummaryTab: FC = () => {
  useFocusEffect(() => {

  });
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const accessToken = useSelector((state: RootState) => state.users.user.data?.accessToken);

  // Function to fetch data from API
  const fetchData = async () => {
    try {
      setLoading(true);
      const props = {
        url: BASE_URL + '/' + SUMMARY,
        token: accessToken !== undefined ? accessToken : ''
      };
      const response = await commonGetAPI(props);
      if (response !== undefined) {

        setData(response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Trigger API call when screen is focused
  useFocusEffect(
    React.useCallback(() => {
      fetchData(); // Call API whenever the screen comes into focus
    }, [])
  );

  // Render the data rows
  const renderItem = ({ item }: { item: DataItem }) => {
    return (
      <DataTable.Row>
        <DataTable.Cell>{item.lineName}</DataTable.Cell>
        <DataTable.Cell>{item.customer}</DataTable.Cell>
        <DataTable.Cell numeric>{item.style}</DataTable.Cell>
        <DataTable.Cell numeric>{item.po}</DataTable.Cell>
        <DataTable.Cell numeric>{item.color}</DataTable.Cell>
        <DataTable.Cell numeric>{item.totalPass}</DataTable.Cell>
        <DataTable.Cell numeric>{item.totalReceived}</DataTable.Cell>
        <DataTable.Cell numeric>{item.finishAlter}</DataTable.Cell>
        <DataTable.Cell numeric>{item.finishAlterReceive}</DataTable.Cell>
      </DataTable.Row>
    );
  };

  return (
    <View style={{ backgroundColor: 'white', flex: 1, padding: 15 }}>
      <DataTable>
        <DataTable.Header style={{ backgroundColor: '#F3F3F3', borderRadius: 10 }}>
          {[
            'Line',
            'Buyer',
            'Style',
            'PO',
            'Color',
            'T. QC',
            'T. Receive',
            'T. Finishing Alter',
            'T. Finish Alt. Receive'
          ].map((name, index) => (
            <DataTable.Title key={index} numeric={index >= 2}>
              <Text style={Styles.columnName}>{name}</Text>
            </DataTable.Title>
          ))}
        </DataTable.Header>

        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            style={{ marginBottom: 50 }}
            data={data}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
          />
        )}
      </DataTable>
    </View>
  );
};

export default TodaySummaryTab;

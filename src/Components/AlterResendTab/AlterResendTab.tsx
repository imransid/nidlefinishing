import React, {type FC} from 'react';
import {Text, TouchableOpacity, View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DataTableComponent from '../../Components/DataTableComponent/DataTableComponent';

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

  const renderItem = ({item}: {item: number}) => (
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
    <View style={{backgroundColor: 'white', flex: 1}}>
      <FlatList
        style={{marginBottom: 100}}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
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
        <Icon name="send" size={20} color={'white'} />
        <Text style={{color: 'white', marginStart: 10}}>
          CONFIRM FINISHING ALTER RECEIVE
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlterResendTab;

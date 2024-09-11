import React, {FC, useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';

const ReceiveTab: FC = () => {
  const [adjustmentQty, setAdjustmentQty] = useState([
    {
      color: 'White',
      size: 'M',
      input: 1000,
      qcQty: 900,
      recQty: 500,
      adjustmentQty: 10,
    },
    {
      color: 'White',
      size: 'L',
      input: 2000,
      qcQty: 800,
      recQty: 800,
      adjustmentQty: 5,
    },
    {
      color: 'White',
      size: 'S',
      input: 2000,
      qcQty: 700,
      recQty: 600,
      adjustmentQty: 15,
    },
  ]);

  const totalReceiveQuantity = adjustmentQty.reduce(
    (total, row) => total + row.recQty,
    0,
  );

  const handleAdjustmentChange = (index: number, value: string) => {
    const updatedQty = [...adjustmentQty];
    updatedQty[index].adjustmentQty = parseInt(value, 10) || 0;
    setAdjustmentQty(updatedQty);
  };

  return (
    <>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Buyer</Text>
          <Text style={styles.subHeaderText}>Brothers Fashion Ltd.</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Style</Text>
          <Text style={styles.subHeaderText}>Brother-5060OD</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>PO</Text>
          <Text style={styles.subHeaderText}>PO-5623147855</Text>
        </View>
      </View>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Color</DataTable.Title>
          <DataTable.Title>Size</DataTable.Title>
          <DataTable.Title numeric>Input</DataTable.Title>
          <DataTable.Title numeric>QC Qty</DataTable.Title>
          <DataTable.Title numeric>Rec. Qty</DataTable.Title>
          <DataTable.Title numeric>Adjustment Qty</DataTable.Title>
        </DataTable.Header>

        {adjustmentQty.map((row, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{row.color}</DataTable.Cell>
            <DataTable.Cell>{row.size}</DataTable.Cell>
            <DataTable.Cell numeric>{row.input}</DataTable.Cell>
            <DataTable.Cell numeric>{row.qcQty}</DataTable.Cell>
            <DataTable.Cell numeric>{row.recQty}</DataTable.Cell>
            <DataTable.Cell>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                value={row.adjustmentQty.toString()}
                onChangeText={value => handleAdjustmentChange(index, value)}
              />
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>

      <View style={styles.tableFooter}>
        <Text style={styles.tableFooterText}>Total receive Quantity =</Text>
        <Text style={styles.tableFooterValue}>{totalReceiveQuantity}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#9B97C0',
  },
  subHeaderText: {
    fontSize: 20,
    color: '#765492',
    fontWeight: '600',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    width: 100,
    height: 35,
    paddingHorizontal: 5,
    marginLeft: 110,
    color: 'black',
  },
  tableFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
  },
  tableFooterText: {
    fontSize: 16,
    color: '#765492',
  },
  tableFooterValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#765492',
    marginLeft: 8,
  },
});

export default ReceiveTab;

import React, {FC, useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';
import CheckboxComponent from '../CheckboxComponent/CheckboxComponent';
import Styles from './styles';
interface IDataTableProps {
  buyer: string;
  buyerName: string;
  style: string;
  styleName: string;
  order: string;
  orderNumber: string;
  showCheckbox?: boolean;
  columnNames: string[];
  rowData: Array<{
    color: string;
    size: string;
    inputQty: number;
    qcQty: number;
    totalReceive: number;
    balanceQty: number;
    receiveQty: number;
  }>;
}

const DataTableComponent: FC<IDataTableProps> = ({
  buyer: buyerHeader,
  buyerName,
  style: styleHeader,
  styleName,
  order: POheader,
  orderNumber: POnumber,
  showCheckbox = false,
  columnNames,
  rowData,
}) => {
  const [receiveQty, setReceiveQty] = useState(rowData);

  const totalReceiveQuantity = receiveQty.reduce(
    (total, row) => total + row.receiveQty,
    0,
  );

  const handleAdjustmentChange = (index: number, value: string) => {
    const updatedQty = [...receiveQty];
    updatedQty[index].receiveQty = parseInt(value, 10) || 0;
    setReceiveQty(updatedQty);
  };

  return (
    <View style={Styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={Styles.header}>
          <Text style={Styles.headerText}>{buyerHeader}</Text>
          <Text style={Styles.subHeaderText}>{buyerName}</Text>
        </View>
        <View style={Styles.header}>
          <Text style={Styles.headerText}>{styleHeader}</Text>
          <Text style={Styles.subHeaderText}>{styleName}</Text>
        </View>
        <View style={Styles.header}>
          <Text style={Styles.headerText}>{POheader}</Text>
          <Text style={Styles.subHeaderText}>{POnumber}</Text>
        </View>
        {showCheckbox && <CheckboxComponent />}
      </View>

      <DataTable>
        <DataTable.Header>
          {columnNames.map((name, index) => (
            <DataTable.Title key={index} numeric={index >= 2}>
              <Text style={Styles.columnName}>{name}</Text>
            </DataTable.Title>
          ))}
        </DataTable.Header>

        {receiveQty.map((row, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{row.color}</DataTable.Cell>
            <DataTable.Cell>{row.size}</DataTable.Cell>
            <DataTable.Cell numeric>{row.inputQty}</DataTable.Cell>
            <DataTable.Cell numeric>{row.qcQty}</DataTable.Cell>
            <DataTable.Cell numeric>{row.totalReceive}</DataTable.Cell>
            <DataTable.Cell>
              <TextInput
                style={Styles.textInput}
                keyboardType="numeric"
                value={row.receiveQty.toString()}
                onChangeText={value => handleAdjustmentChange(index, value)}
              />
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>

      <View style={Styles.tableFooter}>
        <Text style={Styles.tableFooterText}></Text>
        <Text style={Styles.tableFooterValue}>{totalReceiveQuantity}</Text>
      </View>
    </View>
  );
};

export default DataTableComponent;

import React, {FC, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {DataTable} from 'react-native-paper';
import Styles from './styles';
interface IDataTableProps {
  buyer: string;
  buyerName: string;
  style: string;
  styleName: string;
  order: string;
  orderNumber: string;
  columnNames: string[];
  rowData: any;
}

const FinishingAlterDataTableComponent: FC<IDataTableProps> = ({
  buyer: buyerHeader,
  buyerName,
  style: styleHeader,
  styleName,
  order: POheader,
  orderNumber: POnumber,
  columnNames,
  rowData,
}) => {
  const [finishingAlterSendQty, setFinishingAlterSendQty] = useState(rowData);

  const finishingAlterSendQuantity = finishingAlterSendQty.reduce(
    (total, row) => total + row.finishingAlterSendQty,
    0,
  );

  const handleAdjustmentChange = (index: number, value: string) => {
    const updatedQty = [...finishingAlterSendQty];
    updatedQty[index].finishingAlterSendQty = parseInt(value, 10) || 0;
    setFinishingAlterSendQty(updatedQty);
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.headerContainer}>
        <View style={Styles.headerTextContainer}>
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
        </View>
      </View>

      <DataTable>
        <DataTable.Header>
          {columnNames.map((name, index) => (
            <DataTable.Title key={index} numeric={index >= 2}>
              <Text style={Styles.columnName}>{name}</Text>
            </DataTable.Title>
          ))}
        </DataTable.Header>

        {finishingAlterSendQty.map((row, index) => (
          <>
            <DataTable.Row key={index}>
              <DataTable.Cell>{row.color}</DataTable.Cell>
              <DataTable.Cell>{row.size}</DataTable.Cell>
              <DataTable.Cell numeric>{row.receiveQty}</DataTable.Cell>
              <DataTable.Cell>
                <TextInput
                  style={Styles.textInput}
                  keyboardType="numeric"
                  value={row.finishingAlterSendQty.toString()}
                  onChangeText={value => handleAdjustmentChange(index, value)}
                />
              </DataTable.Cell>
            </DataTable.Row>
          </>
        ))}
      </DataTable>

      <View style={Styles.tableFooter}>
        {columnNames.map((name, index) => (
          <Text key={index} style={Styles.tableFooterValue}>
            {name === 'Color'
              ? 'Total = '
              : name === ' Size'
                ? ' '
                : name === 'Receive Qty.'
                  ? ' '
                  : name === 'Finishing Alter Send Qty.'
                    ? finishingAlterSendQuantity
                    : ''}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default FinishingAlterDataTableComponent;

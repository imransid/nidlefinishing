import React, { FC, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { DataTable } from 'react-native-paper';
import Styles from './styles';
import CustomTextInput from '../CustomTextInput/CustomTextInput';
import stylesTemp from '../CustomTextInput/style';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

interface IDataTableProps {
  styleID: number;
  orderID: number;
  buyer: string;
  buyerName: string;
  style: string;
  styleName: string;
  order: string;
  orderNumber: string;
  columnNames: string[];
  rowData: any;
  selectedLine: string;
  onUpdatedArray: (updatedArray: any[]) => void; // New prop to pass updated array to parent
}

const FinishingAlterDataTableComponent: FC<IDataTableProps> = ({
  buyer: buyerHeader,
  buyerName,
  style: styleHeader,
  styleName,
  order: POheader,
  orderNumber: POnumber,
  columnNames,
  selectedLine,
  rowData,
  onUpdatedArray,
  orderID,
  styleID,
}) => {
  const [textInputValues, setTextInputValues] = useState(
    rowData.map((row: any) => ({
      ...row,
      finishingAlterSendQty: row.finishingAlterSendQty || '0',
    })),
  );

  const [focusedInputIndex, setFocusedInputIndex] = useState<number | null>(
    null,
  );
  const finishingOrdID = useSelector((e: RootState) => e.setLine.selectedOrgDrop)



  const handleTextInputChange = (index: number, value: string) => {
    const updatedValues = [...textInputValues];
    const numericValue = isNaN(Number(value)) ? '0' : value;

    updatedValues[index].finishingAlterSendQty = numericValue;
    setTextInputValues(updatedValues);

    const updatedArray = updatedValues.map((row: any, i) => ({
      id: `${styleName}-${POnumber}-${row.varienceId}-${i}`,
      styleId: styleID,
      orderentityId: orderID,
      varienceId: row.varienceId,
      qmsOrgId: selectedLine,
      finishingOrgId: finishingOrdID, // start time array
      qty: row.finishingAlterSendQty,
      isPacked: row.isPacked || false,
    }));

    // Pass the updated array to the parent component
    onUpdatedArray(updatedArray);
  };

  const finishingAlterSendQuantity = textInputValues.reduce(
    (total: any, row: any) =>
      total + (parseInt(row.finishingAlterSendQty, 10) || 0),
    0,
  );

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

        {textInputValues.map((row: any, index: any) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{row.color}</DataTable.Cell>
            <DataTable.Cell>{row.size}</DataTable.Cell>
            <DataTable.Cell numeric>{row.rcvQty}</DataTable.Cell>
            <DataTable.Cell>
              {/* <CustomTextInput
                  type="quantity"
                  maxLength={4}
                  keyboardType="numeric"
                  value={row.finishingAlterSendQty.toString()} // Bind to textInputValues state
                  onChangeText={value => handleTextInputChange(index, value)}
                /> */}
              <TextInput
                style={[
                  stylesTemp.container,
                  stylesTemp.textInput,
                  {
                    borderColor:
                      focusedInputIndex === index ? '#1C98D8' : '#ddd',
                  },
                ]}
                value={row.finishingAlterSendQty}
                keyboardType="numeric"
                onChangeText={val => handleTextInputChange(index, val)}
                onFocus={() => setFocusedInputIndex(index)}
                onBlur={() => setFocusedInputIndex(null)}
              />
            </DataTable.Cell>
          </DataTable.Row>
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

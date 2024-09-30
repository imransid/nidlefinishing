/* eslint-disable */
import React, { type FC, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { useSelector } from 'react-redux';
import DeviceInfo from 'react-native-device-info';
import { type RootState } from '@/store';

import CheckboxComponent from '../CheckboxComponent/CheckboxComponent';
import stylesTemp from '../CustomTextInput/style';
import { type Breakdown } from '../ReceiveTab/interface';

import Styles from './styles';
import { scale } from 'react-native-size-matters';
export interface ApiDataItem {
  id?: string; // Unique identifier for each item
  styleId: number;
  orderentityId: number;
  varienceId: number;
  qmsOrgId: number;
  finishingOrgId: number;
  qty: string;
  isPacked: boolean;
}

interface IDataTableProps {
  buyer: string;
  buyerName: string;
  style: string;
  styleName: string;
  order: string;
  orderNumber: number;
  showCheckbox?: boolean;
  columnNames: string[];
  rowData: Breakdown[];
  onUpdatedArray: any;
  styleID: number;
  selectedLine: number;
  totalQCQty: number;
  totalReceiveQty: number;
  oderName: string
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
  onUpdatedArray,
  styleID,
  selectedLine,
  totalQCQty,
  totalReceiveQty,
  oderName
}) => {
  const [receiveQty, setReceiveQty] = useState(rowData);
  const finishingOrdID = useSelector((e: RootState) => e.setLine.selectedOrgDrop);

  // Track the focused state of each input field
  const [focusedInputIndex, setFocusedInputIndex] = useState<number | null>(null);

  // State to track if the checkbox is checked
  const [isPacked, setIsPacked] = useState(false);
  const generateUniqueId = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  const uniqueId = generateUniqueId;

  // Initialize textInputValues with empty strings or existing values
  const [textInputValues, setTextInputValues] = useState(
    rowData.map(row => ({
      ...row,
      tempReceived: ''
    }))
  );


  const handleTextInputChange = (index: number, value: string) => {

    // Ensure the value is a number and defaults to 0 if empty
    const newValue = value.trim() === '' ? '0' : value;
    const numericValue = isNaN(Number(newValue)) ? 0 : Number(newValue);

    // Fetch the balance for the current row
    const balanceQty = textInputValues[index].balance;

    const updateTextInputValues = (tempReceivedValue: string) => {
      const updatedTextInputs = [...textInputValues];
      updatedTextInputs[index].tempReceived = tempReceivedValue; // Store as string
      setTextInputValues(updatedTextInputs);
      return updatedTextInputs;
    };

    const generateUpdatedArray = (textInputs: typeof textInputValues) => {
      return textInputs.map((row: any) => ({
        id: row.varienceId + POnumber, // Include the unique ID here
        styleId: styleID,
        orderentityId: POnumber,
        varienceId: row.varienceId,
        qmsOrgId: selectedLine,
        finishingOrgId: finishingOrdID,
        qty: row.tempReceived, // Use the updated quantity
        isPacked: isPacked === undefined ? false : isPacked,
      }));
    };

    // Handle input validation
    if (numericValue > balanceQty) {
      // If the input value exceeds the balance
      alert(`Received quantity cannot be greater than the balance (${balanceQty})`);
      const updatedTextInputs = updateTextInputValues(''); // Reset to balance value
      const updatedArray = generateUpdatedArray(updatedTextInputs);
      onUpdatedArray(updatedArray);

    } else {
      // Update the state with the new value
      const updatedTextInputs = updateTextInputValues(numericValue.toString());

      // Generate the updated array when input value changes
      const updatedArray = generateUpdatedArray(updatedTextInputs);
      onUpdatedArray(updatedArray);
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setIsPacked(checked);
    // Optionally, update the textInputValues to reflect this change
    const updatedTextInputs = textInputValues.map(row => ({
      ...row,
      isPacked: checked
    }));
    setTextInputValues(updatedTextInputs);
  };

  // Calculate the total tempReceived
  const totalTempReceived = textInputValues.reduce(
    (total, row) => total + (Number(row.tempReceived) || 0),
    0
  );

  return (
    <View style={Styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderColor: '#E3E1F0'
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between'
          }}>
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
            <Text style={Styles.subHeaderText}>{oderName}</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
          {showCheckbox && <CheckboxComponent onChange={handleCheckboxChange} />}
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

        {textInputValues.map((row, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{row.color}</DataTable.Cell>
            <DataTable.Cell>{row.size}</DataTable.Cell>
            <DataTable.Cell numeric>{row.qcQty}</DataTable.Cell>
            <DataTable.Cell numeric>{row.totalReceived}</DataTable.Cell>
            <DataTable.Cell numeric>{row.balance}</DataTable.Cell>
            <DataTable.Cell>
              <TextInput
                style={[
                  stylesTemp.container,
                  stylesTemp.textInput,
                  {
                    borderColor: focusedInputIndex === index ? '#1C98D8' : '#ddd', marginLeft:scale(35)
                  }
                ]}
                value={row.tempReceived}
                keyboardType="numeric"
                onChangeText={val => {
                  handleTextInputChange(index, val);
                }}
                onFocus={() => {
                  setFocusedInputIndex(index);
                }}
                onBlur={val => {

                  setFocusedInputIndex(null);

                }}
              />
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>

      <View style={Styles.tableFooter}>
        {columnNames.map((name, index) => (
          <Text key={index} style={Styles.tableFooterValue}>
            {name === 'Color'
              ? 'Total =         '
              : name === 'Size'
                ? '          '
                : name === 'QC Qty.'
                  ? totalQCQty
                  : name === 'Total Receive'
                    ? totalReceiveQty
                    : name === 'Balance Qty.'
                      ? ''
                      : name === 'Receive Qty.'
                        ? totalTempReceived
                        : 0}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default DataTableComponent;


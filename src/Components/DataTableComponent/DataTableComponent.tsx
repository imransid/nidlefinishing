import React, {FC, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {DataTable} from 'react-native-paper';
import CheckboxComponent from '../CheckboxComponent/CheckboxComponent';
import Styles from './styles';
import {Breakdown} from '../ReceiveTab/interface';
import stylesTemp from '../CustomTextInput/style';

export interface ApiDataItem {
  id?: string; // Unique identifier for each item
  styleId: number;
  orderentityId: number;
  varienceId: number;
  qmsOrgId: number;
  finishingOrgId: number;
  qty: number;
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
}) => {
  const [receiveQty, setReceiveQty] = useState(rowData);

  // Track the focused state of each input field
  const [focusedInputIndex, setFocusedInputIndex] = useState<number | null>(
    null,
  );

  // State to track if the checkbox is checked
  const [isPacked, setIsPacked] = useState(false);

  // Initialize textInputValues with empty strings or existing values
  const [textInputValues, setTextInputValues] = useState(
    rowData.map(row => ({
      ...row,
      tempReceived: '0',
    })),
  );

  const handleTextInputChange = (index: number, value: string) => {
    // Ensure the value is a number and defaults to 0 if empty
    const newValue = value.trim() === '' ? '0' : value;
    const numericValue = isNaN(Number(newValue)) ? 0 : Number(newValue);

    // Fetch the balance for the current row
    const balanceQty = textInputValues[index].totalReceived;

    // Check if the received quantity is greater than the balance
    if (numericValue > balanceQty) {
      // If the input value exceeds the balance, reset to the balance
      alert(
        `Received quantity cannot be greater than the balance (${balanceQty})`,
      );
      setTextInputValues(prevState => {
        const updated = [...prevState];
        updated[index].tempReceived = balanceQty.toString(); // Set to balance value
        return updated;
      });
    } else {
      // If input is valid, update the state as usual
      const updatedTextInputs = [...textInputValues];
      updatedTextInputs[index].tempReceived = numericValue.toString(); // Store as string
      setTextInputValues(updatedTextInputs);

      // Generate and log the array when input value changes
      const updatedArray = updatedTextInputs.map((row: any, i) => ({
        id: `${styleName}-${POnumber}-${row.varienceId}-${i}`,
        styleId: styleID,
        orderentityId: POnumber,
        varienceId: row.varienceId,
        qmsOrgId: 2002,
        finishingOrgId: 2002,
        qty: row.tempReceived, // Use the updated quantity
        isPacked: isPacked === undefined ? false : isPacked,
      }));

      // Call the handler to update the parent component's ref
      onUpdatedArray(updatedArray);
    }
  };

  const totalReceiveQuantity = receiveQty.reduce(
    (total, row) => total + (row.totalReceived || 0),
    0,
  );

  const handleCheckboxChange = (checked: boolean) => {
    setIsPacked(checked);
    // Optionally, update the textInputValues to reflect this change
    const updatedTextInputs = textInputValues.map(row => ({
      ...row,
      isPacked: checked,
    }));
    setTextInputValues(updatedTextInputs);
  };

  return (
    <View style={Styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderColor: '#E3E1F0',
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
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
            <Text style={Styles.subHeaderText}>{POnumber}</Text>
          </View>
        </View>
        <View
          style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
          {showCheckbox && (
            <CheckboxComponent onChange={handleCheckboxChange} />
          )}
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
            <DataTable.Cell numeric>{row.balance}</DataTable.Cell>
            <DataTable.Cell numeric>{row.qcQty}</DataTable.Cell>
            <DataTable.Cell numeric>{row.totalReceived}</DataTable.Cell>
            <DataTable.Cell>
              <TextInput
                style={[
                  stylesTemp.container,
                  stylesTemp.textInput,
                  {
                    borderColor:
                      focusedInputIndex === index ? '#1C98D8' : '#ddd',
                  },
                ]}
                value={row.tempReceived}
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
              : name === 'Size'
                ? '                                  '
                : name === 'Input Qty.'
                  ? ' '
                  : name === 'QC Qty.'
                    ? totalReceiveQuantity
                    : name === 'Total Receive'
                      ? totalReceiveQuantity
                      : name === 'Balance Qty.'
                        ? ' '
                        : name === 'Receive Qty.'
                          ? totalReceiveQuantity
                          : 0}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default DataTableComponent;

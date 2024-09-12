import React, {type FC} from 'react';
import {Text, View, FlatList} from 'react-native';
import {DataTable} from 'react-native-paper';
import Styles from '../DataTableComponent/styles';

const TodaySummaryTab: FC = () => {
  const testData = [
    {
      line: 'White',
      buyer: 'M',
      style: 1000,
      po: 900,
      color: 500,
      tInput: 500,
      tQc: 0,
      tReceive: 500,
      tFinishingAlter: 500,
      tFinishingALterReceive: 0,
    },
    {
      line: 'Blue',
      buyer: 'F',
      style: 1001,
      po: 901,
      color: 501,
      tInput: 510,
      tQc: 5,
      tReceive: 505,
      tFinishingAlter: 495,
      tFinishingALterReceive: 5,
    },
    {
      line: 'Red',
      buyer: 'M',
      style: 1002,
      po: 902,
      color: 502,
      tInput: 520,
      tQc: 10,
      tReceive: 510,
      tFinishingAlter: 490,
      tFinishingALterReceive: 10,
    },
    {
      line: 'Green',
      buyer: 'F',
      style: 1003,
      po: 903,
      color: 503,
      tInput: 530,
      tQc: 15,
      tReceive: 515,
      tFinishingAlter: 485,
      tFinishingALterReceive: 15,
    },
    {
      line: 'Yellow',
      buyer: 'M',
      style: 1004,
      po: 904,
      color: 504,
      tInput: 540,
      tQc: 20,
      tReceive: 520,
      tFinishingAlter: 480,
      tFinishingALterReceive: 20,
    },
    {
      line: 'Purple',
      buyer: 'F',
      style: 1005,
      po: 905,
      color: 505,
      tInput: 550,
      tQc: 25,
      tReceive: 525,
      tFinishingAlter: 475,
      tFinishingALterReceive: 25,
    },
    {
      line: 'Orange',
      buyer: 'M',
      style: 1006,
      po: 906,
      color: 506,
      tInput: 560,
      tQc: 30,
      tReceive: 530,
      tFinishingAlter: 470,
      tFinishingALterReceive: 30,
    },
    {
      line: 'Pink',
      buyer: 'F',
      style: 1007,
      po: 907,
      color: 507,
      tInput: 570,
      tQc: 35,
      tReceive: 535,
      tFinishingAlter: 465,
      tFinishingALterReceive: 35,
    },
    {
      line: 'Brown',
      buyer: 'M',
      style: 1008,
      po: 908,
      color: 508,
      tInput: 580,
      tQc: 40,
      tReceive: 540,
      tFinishingAlter: 460,
      tFinishingALterReceive: 40,
    },
    {
      line: 'Gray',
      buyer: 'F',
      style: 1009,
      po: 909,
      color: 509,
      tInput: 590,
      tQc: 45,
      tReceive: 545,
      tFinishingAlter: 455,
      tFinishingALterReceive: 45,
    },
    {
      line: 'Black',
      buyer: 'M',
      style: 1010,
      po: 910,
      color: 510,
      tInput: 600,
      tQc: 50,
      tReceive: 550,
      tFinishingAlter: 450,
      tFinishingALterReceive: 50,
    },
    {
      line: 'Cyan',
      buyer: 'F',
      style: 1011,
      po: 911,
      color: 511,
      tInput: 610,
      tQc: 55,
      tReceive: 555,
      tFinishingAlter: 445,
      tFinishingALterReceive: 55,
    },
    {
      line: 'Magenta',
      buyer: 'M',
      style: 1012,
      po: 912,
      color: 512,
      tInput: 620,
      tQc: 60,
      tReceive: 560,
      tFinishingAlter: 440,
      tFinishingALterReceive: 60,
    },
    {
      line: 'Teal',
      buyer: 'F',
      style: 1013,
      po: 913,
      color: 513,
      tInput: 630,
      tQc: 65,
      tReceive: 565,
      tFinishingAlter: 435,
      tFinishingALterReceive: 65,
    },
    {
      line: 'Violet',
      buyer: 'M',
      style: 1014,
      po: 914,
      color: 514,
      tInput: 640,
      tQc: 70,
      tReceive: 570,
      tFinishingAlter: 430,
      tFinishingALterReceive: 70,
    },
    {
      line: 'Maroon',
      buyer: 'F',
      style: 1015,
      po: 915,
      color: 515,
      tInput: 650,
      tQc: 75,
      tReceive: 575,
      tFinishingAlter: 425,
      tFinishingALterReceive: 75,
    },
    {
      line: 'Navy',
      buyer: 'M',
      style: 1016,
      po: 916,
      color: 516,
      tInput: 660,
      tQc: 80,
      tReceive: 580,
      tFinishingAlter: 420,
      tFinishingALterReceive: 80,
    },
    {
      line: 'Olive',
      buyer: 'F',
      style: 1017,
      po: 917,
      color: 517,
      tInput: 670,
      tQc: 85,
      tReceive: 585,
      tFinishingAlter: 415,
      tFinishingALterReceive: 85,
    },
    {
      line: 'Beige',
      buyer: 'M',
      style: 1018,
      po: 918,
      color: 518,
      tInput: 680,
      tQc: 90,
      tReceive: 590,
      tFinishingAlter: 410,
      tFinishingALterReceive: 90,
    },
    {
      line: 'Turquoise',
      buyer: 'F',
      style: 1019,
      po: 919,
      color: 519,
      tInput: 690,
      tQc: 95,
      tReceive: 595,
      tFinishingAlter: 405,
      tFinishingALterReceive: 95,
    },
    {
      line: 'Gold',
      buyer: 'M',
      style: 1020,
      po: 920,
      color: 520,
      tInput: 700,
      tQc: 100,
      tReceive: 600,
      tFinishingAlter: 400,
      tFinishingALterReceive: 100,
    },
  ];

  const renderItem = ({item}: {item: (typeof testData)[0]}) => (
    <DataTable.Row>
      <DataTable.Cell>{item.line}</DataTable.Cell>
      <DataTable.Cell>{item.buyer}</DataTable.Cell>
      <DataTable.Cell numeric>{item.style}</DataTable.Cell>
      <DataTable.Cell numeric>{item.po}</DataTable.Cell>
      <DataTable.Cell numeric>{item.color}</DataTable.Cell>
      <DataTable.Cell numeric>{item.tInput}</DataTable.Cell>
      <DataTable.Cell numeric>{item.tQc}</DataTable.Cell>
      <DataTable.Cell numeric>{item.tReceive}</DataTable.Cell>
      <DataTable.Cell numeric>{item.tFinishingAlter}</DataTable.Cell>
      <DataTable.Cell numeric>{item.tFinishingALterReceive}</DataTable.Cell>
    </DataTable.Row>
  );

  return (
    <View style={{backgroundColor: 'white', flex: 1, padding: 15}}>
      <DataTable>
        <DataTable.Header
          style={{backgroundColor: '#F3F3F3', borderRadius: 10}}>
          {[
            'Line',
            'Buyer',
            'Style',
            'PO',
            'Color',
            'T. Input',
            'T. QC',
            'T. Receive',
            'T. Finishing Alter',
            'T. Finish Alt. Receive',
          ].map((name, index) => (
            <DataTable.Title key={index} numeric={index >= 2}>
              <Text style={Styles.columnName}>{name}</Text>
            </DataTable.Title>
          ))}
        </DataTable.Header>

        <FlatList
        style={{marginBottom:50}}
          data={testData}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </DataTable>
    </View>
  );
};

export default TodaySummaryTab;

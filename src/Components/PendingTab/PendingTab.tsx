import {FC} from 'react';
import CardComponent from '../CardComponent/CardComponent';
import React from 'react';
import {Col, Grid} from 'react-native-easy-grid';

const data = [
  {
    line: 'Line 1',
    receiveInfo: 'Rcv: 2000pcs confirmation confirm',
    sizeS: 1000,
    sizeM: 500,
    sizeL: 500,
    status: 'CONFIRM',
  },
  {
    line: 'Line 1',
    receiveInfo: 'Rcv: 2000pcs confirmation confirm',
    sizeS: 1000,
    sizeM: 500,
    sizeL: 500,
    status: 'PENDING',
  },
  {
    line: 'Line 1',
    receiveInfo: 'Rcv: 2000pcs confirmation confirm',
    sizeS: 1000,
    sizeM: 500,
    sizeL: 500,
    status: 'CONFIRM',
  },
  {
    line: 'Line 1',
    receiveInfo: 'Rcv: 2000pcs confirmation confirm',
    sizeS: 1000,
    sizeM: 500,
    sizeL: 500,
    status: 'CANCEL',
  },
  {
    line: 'Line 1',
    receiveInfo: 'Rcv: 2000pcs confirmation confirm',
    sizeS: 1000,
    sizeM: 500,
    sizeL: 500,
    status: 'PENDING',
  },
  {
    line: 'Line 1',
    receiveInfo: 'Rcv: 2000pcs confirmation confirm',
    sizeS: 1000,
    sizeM: 500,
    sizeL: 500,
    status: 'CANCEL',
  },
  {
    line: 'Line 1',
    receiveInfo: 'Rcv: 2000pcs confirmation confirm',
    sizeS: 1000,
    sizeM: 500,
    sizeL: 500,
    status: 'CANCEL',
  },
  {
    line: 'Line 1',
    receiveInfo: 'Rcv: 2000pcs confirmation confirm',
    sizeS: 1000,
    sizeM: 500,
    sizeL: 500,
    status: 'PENDING',
  },
  {
    line: 'Line 1',
    receiveInfo: 'Rcv: 2000pcs confirmation confirm',
    sizeS: 1000,
    sizeM: 500,
    sizeL: 500,
    status: 'CANCEL',
  },
];

const PendingTab: FC = () => {
  return (
    <Grid style={{backgroundColor: 'white'}}>
      <Col
        style={{
          backgroundColor: '#F9F8FB',
          borderWidth: 1,
          borderColor: '#E3E1F0',
          margin: 10,
          borderRadius: 10,
        }}>
        <CardComponent cardHeading="Receive Confirmation" cardContent={data} />
      </Col>
      <Col
        style={{
          backgroundColor: '#F9F8FB',
          borderWidth: 1,
          borderColor: '#E3E1F0',
          margin: 10,
          borderRadius: 10,
        }}>
        <CardComponent cardHeading="F. Alter Acceptance" cardContent={data} />
      </Col>
      <Col
        style={{
          backgroundColor: '#F9F8FB',
          borderWidth: 1,
          borderColor: '#E3E1F0',
          margin: 10,
          borderRadius: 10,
        }}>
        <CardComponent
          cardHeading="F. Alter Receive Confirmation "
          cardContent={data}
        />
      </Col>
    </Grid>
  );
};

export default PendingTab;

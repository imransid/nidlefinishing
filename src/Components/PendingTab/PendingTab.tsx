import {FC, useState} from 'react';
import CardComponent from '../CardComponent/CardComponent';
import React from 'react';
import {Col, Grid} from 'react-native-easy-grid';
import {useSelector} from 'react-redux';
import {RootState} from '@/store';
import {BASE_URL, FINISHING_STATUS} from '@/utils/environment';
import {commonGetAPI} from '@/store/sagas/helper/api.saga';
import {useFocusEffect} from '@react-navigation/native';

// const data = [
//   {
//     line: 'Line 1',
//     receiveInfo: 'Rcv: 2000pcs confirmation confirm',
//     sizeS: 1000,
//     sizeM: 500,
//     sizeL: 500,
//     status: 'CONFIRM',
//   },
//   {
//     line: 'Line 1',
//     receiveInfo: 'Rcv: 2000pcs confirmation confirm',
//     sizeS: 1000,
//     sizeM: 500,
//     sizeL: 500,
//     status: 'PENDING',
//   },
//   {
//     line: 'Line 1',
//     receiveInfo: 'Rcv: 2000pcs confirmation confirm',
//     sizeS: 1000,
//     sizeM: 500,
//     sizeL: 500,
//     status: 'CONFIRM',
//   },
//   {
//     line: 'Line 1',
//     receiveInfo: 'Rcv: 2000pcs confirmation confirm',
//     sizeS: 1000,
//     sizeM: 500,
//     sizeL: 500,
//     status: 'CANCEL',
//   },
//   {
//     line: 'Line 1',
//     receiveInfo: 'Rcv: 2000pcs confirmation confirm',
//     sizeS: 1000,
//     sizeM: 500,
//     sizeL: 500,
//     status: 'PENDING',
//   },
//   {
//     line: 'Line 1',
//     receiveInfo: 'Rcv: 2000pcs confirmation confirm',
//     sizeS: 1000,
//     sizeM: 500,
//     sizeL: 500,
//     status: 'CANCEL',
//   },
//   {
//     line: 'Line 1',
//     receiveInfo: 'Rcv: 2000pcs confirmation confirm',
//     sizeS: 1000,
//     sizeM: 500,
//     sizeL: 500,
//     status: 'CANCEL',
//   },
//   {
//     line: 'Line 1',
//     receiveInfo: 'Rcv: 2000pcs confirmation confirm',
//     sizeS: 1000,
//     sizeM: 500,
//     sizeL: 500,
//     status: 'PENDING',
//   },
//   {
//     line: 'Line 1',
//     receiveInfo: 'Rcv: 2000pcs confirmation confirm',
//     sizeS: 1000,
//     sizeM: 500,
//     sizeL: 500,
//     status: 'CANCEL',
//   },
// ];

// interface DataItem {
//   lineName: string;
//   customer: string;
//   style: string;
//   po: string;
//   color: string;
//   qty: number;
//   totalPass: number;
//   totalReceived: number;
//   finishAlter: number;
//   finishAlterReceive: number;
// }

const PendingTab: FC = () => {
  const [data, setData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);
  const accessToken = useSelector(
    (state: RootState) => state.users.user.data?.accessToken,
  );

  // Function to fetch data from API
  const fetchData = async () => {
    try {
      setLoading(true);
      let props = {
        url: BASE_URL + '/' + FINISHING_STATUS,
        token: accessToken !== undefined ? accessToken : '',
      };
      let response = await commonGetAPI(props);
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
    }, []),
  );
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
        <CardComponent
          cardHeading="Receive Confirmation"
          cardContent={data.finishReceive}
        />
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
          cardHeading="F. Alter Acceptance"
          cardContent={data.finishAlterAcceptance}
        />
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
          cardContent={data.finishAlterReceive}
        />
      </Col>
    </Grid>
  );
};

export default PendingTab;

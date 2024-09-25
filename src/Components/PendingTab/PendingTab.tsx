/* eslint-disable */
import React, { type FC, useState } from 'react';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import { type RootState } from '@/store';
import { commonGetAPI } from '@/store/sagas/helper/api.saga';
import { setPendingData } from '@/store/slices/features/setLineProcess/slice';
import { BASE_URL, FINISHING_STATUS } from '@/utils/environment';

import CardComponent from '../CardComponent/CardComponent';
import { Text } from 'react-native';

const PendingTab: FC = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const accessToken = useSelector((state: RootState) => state.users.user.data?.accessToken);

  // Function to fetch data from API
  const fetchData = async () => {
    try {
      setLoading(true);
      const props = {
        url: BASE_URL + '/' + FINISHING_STATUS,
        token: accessToken !== undefined ? accessToken : ''
      };
      const response = await commonGetAPI(props);
      if (response !== undefined) {
        dispatch(setPendingData(response.data.totalPending));

        setData(response.data.statusBar);
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
    }, [])
  );
  return (
    <Grid style={{ backgroundColor: 'white' }}>
      <Row size={1}><Text>Selected Line</Text></Row>
      <Row size={6}>
        <Col
          style={{
            backgroundColor: '#F9F8FB',
            borderWidth: 1,
            borderColor: '#E3E1F0',
            margin: 10,
            borderRadius: 10
          }}>
          <CardComponent
            cardHeading="Receive Confirmation"
            cardContent={(data as any).finishReceive}
          />
        </Col>
        <Col
          style={{
            backgroundColor: '#F9F8FB',
            borderWidth: 1,
            borderColor: '#E3E1F0',
            margin: 10,
            borderRadius: 10
          }}>
          <CardComponent
            cardHeading="F. Alter Acceptance"
            cardContent={(data as any).finishAlterAcceptance}
          />
        </Col>
        <Col
          style={{
            backgroundColor: '#F9F8FB',
            borderWidth: 1,
            borderColor: '#E3E1F0',
            margin: 10,
            borderRadius: 10
          }}>
          <CardComponent
            cardHeading="F. Alter Receive Confirmation "
            cardContent={(data as any).finishAlterReceive}
          />
        </Col>
      </Row>

    </Grid>
  );
};

export default PendingTab;

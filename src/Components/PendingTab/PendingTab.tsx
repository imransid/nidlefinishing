/* eslint-disable */
import React, { type FC, useState } from 'react';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { type RootState } from '@/store';
import { commonGetAPI } from '@/store/sagas/helper/api.saga';
import { setPendingData } from '@/store/slices/features/setLineProcess/slice';
import { BASE_URL, FINISHING_STATUS, ORG_TREE } from '@/utils/environment';

import CardComponent from '../CardComponent/CardComponent';
import { Text } from 'react-native';
import CustomModalButton from '../CustomModalButton/CustomModalButton';
import SelectLineModal from '../SelectLineModal/SelectLineModal';
import Styles from './style';

const PendingTab: FC = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<any[]>([]);
  const [loader, setLoader] = React.useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [orgTree, setOrgTree] = React.useState([]);
  const [message, setMessage] = React.useState<string>('No Line Selected');
  const accessToken = useSelector((state: RootState) => state.users.user.data?.accessToken);
  const [selectedLine, setSelectedLine] = React.useState<string>('');
  const [selectedLineName, setSelectedLineName] = React.useState<string>('');
  const [lineModalVisible, setLineModalVisible] = React.useState(false);
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

  const fetchOrgData = async () => {
    try {
      setLoader(true);
      const props = {
        url: BASE_URL + '/' + ORG_TREE,
        token: accessToken !== undefined ? accessToken : ''
      };
      const response = await commonGetAPI(props);
      if (response !== undefined) {
        setOrgTree(response.data[0].children);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoader(false);
    }
  };

  const onClickLeaf = async (id: string): Promise<any> => {
    try {
      const props = {
        url: BASE_URL + '/' + FINISHING_STATUS + `?orgId=${id}`,
        token: accessToken !== undefined ? accessToken : ''
      };

      const response = await commonGetAPI(props);

      if (response !== undefined) {
        setSelectedLine(id);
        if (response.data.statusBar.finishAlterAcceptance.length === 0 && response.data.statusBar.finishAlterReceive.length === 0 && response.data.statusBar.finishReceive.length === 0) { setData([]) };
        setData(response.data.statusBar);
        setLineModalVisible(false);
        if (response.data.statusBar.finishAlterAcceptance.length === 0) setMessage('No Finish Alter Acceptance Found. ')
        if (response.data.statusBar.finishAlterReceive.length === 0) setMessage('No Finish Alter Receive Found. ')
        if (response.data.statusBar.finishReceive.length === 0) setMessage('No Finish Receive Found. ')
        // setLoader(false)
      }
    } catch (error) {
      console.error('Error during onClickLeaf execution:', error);
      setLoader(false); // Stop loader
    } finally {
    }
  };

  // Trigger API call when screen is focused
  useFocusEffect(
    React.useCallback(() => {
      fetchOrgData()
      fetchData(); // Call API whenever the screen comes into focus
      return () => {

        setSelectedLine('');
        setLineModalVisible(false);
        setOrgTree([]);
      };
    }, [])
  );
  return (
    <Grid style={{ backgroundColor: 'white' }}>
      <Row size={1}>

        <CustomModalButton
          buttonStyle={Styles.selectLineDateButton}
          buttonTextStyle={Styles.selectLineDateButtonText}
          onPress={() => {
            setLineModalVisible(true);
          }}
          text={selectedLine !== '' ? selectedLineName : 'Select Line'}
          icon={<Icon name="caret-down" size={25} color="#1C98D8" />}
        />


      </Row>
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
      <SelectLineModal
        orgTreeData={orgTree}
        setSelectedLine={setSelectedLine}
        lineModalVisible={lineModalVisible}
        setLineModalVisible={setLineModalVisible}
        pageName="receive"
        onClickAble={async (e: number) => await onClickLeaf(e.toString())}
        setSelectedLineName={setSelectedLineName}
      />
    </Grid>
  );
};

export default PendingTab;

import React, { type FC } from 'react';
import { Text, View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { FlatList } from 'react-native-gesture-handler';

import styles from './style';

interface ICardComponentProps {
  cardHeading: string;
  cardContent: Array<{
    line: string;
    receiveInfo: string;
    sizeS: number;
    sizeM: number;
    sizeL: number;
    status: string;
  }>;
}

const CardComponent: FC<ICardComponentProps> = ({ cardHeading, cardContent }) => {
  const renderItem: any = ({ item }) => {
    return (
      <Grid style={styles.cardContentStyle}>
        <Col size={1.5} style={styles.lineContentStyle}>
          <Text style={styles.lineText}>{item.transanction.qmsOrgName}</Text>
        </Col>
        <Col size={3.5} style={styles.informationContentStyle}>
          <Text style={styles.receiveInfoText}>
            Rcv: {item.transanction.qty}pcs confirmation confirm
          </Text>
          <View style={styles.sizeContentStyle}>
            <Text style={styles.sizeQtyText}>
              {item.transanction.size}:{item.transanction.qty}
            </Text>
          </View>
        </Col>
        <Col size={1.5}>
          <Text
            style={
              item.confirmationStatus === 'ACCEPTED'
                ? styles.statusTextConfirm
                : item.confirmationStatus === 'CONFIRMED'
                  ? styles.statusTextConfirm
                  : item.confirmationStatus === 'CANCEL'
                    ? styles.statusTextCancel
                    : item.confirmationStatus === 'PENDING'
                      ? styles.statusTextPending
                      : item.confirmationStatus === 'CANCELLED'
                        ? styles.statusTextCancel
                        : item.confirmationStatus === 'RECEIVED'
                          ? styles.statusTextConfirm
                          : ''
            }>
            {item.confirmationStatus}
          </Text>
        </Col>
      </Grid>
    );
  };
  return (
    <Grid>
      <Col>
        <Row size={1} style={styles.cardHeaderContainer}>
          <Text style={styles.cardHeading}>{cardHeading}</Text>
        </Row>
        <Row style={styles.cardStyle} size={8}>
          <FlatList
            maxToRenderPerBatch={5}
            renderItem={renderItem}
            data={cardContent}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={true}
          />
        </Row>
      </Col>
    </Grid>
  );
};

export default CardComponent;

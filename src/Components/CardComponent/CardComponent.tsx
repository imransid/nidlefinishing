/* eslint-disable */
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
    confirmationStatus: string; // Make sure this field exists in the props
    transanction: {
      qmsOrgName: string;
      qty: number;
      size: string;
    };
  }>;
}

const CardComponent: FC<ICardComponentProps> = ({ cardHeading, cardContent }) => {
  // Check if cardContent is an array and has items
  if (!Array.isArray(cardContent) || cardContent.length === 0) {
    return (
      <Grid>
        <Col>
          <Row size={1} style={styles.cardHeaderContainer}>
            <Text style={styles.cardHeading}>{cardHeading}</Text>
          </Row>
          <Row style={[styles.cardStyle, { justifyContent: 'center' }]} size={8}>
            <Text style={{ alignSelf: 'center' }}>No data found</Text>
          </Row>
        </Col>
      </Grid>
    );
  }
  // Sorting cardContent based on confirmationStatus
  const sortedCardContent = [...cardContent].sort((a, b) => {
    const statusPriority = (status: string) => {
      switch (status) {
        case 'PENDING':
          return 1;
        case 'CANCELLED':
        case 'REJECTED':
          return 2;
        case 'CONFIRMED':
        case 'ACCEPTED':
        case 'RECEIVED':
          return 3;
        default:
          return 4;
      }
    };
    return statusPriority(a.confirmationStatus) - statusPriority(b.confirmationStatus);
  });

  const renderItem = ({ item }: { item: (typeof cardContent)[0] }) => {
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
                        : item.confirmationStatus === 'REJECTED'
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
            data={sortedCardContent}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={true}
          />
        </Row>
      </Col>
    </Grid>
  );
};

export default CardComponent;

import React from 'react';
import {FC} from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import {FlatList} from 'react-native-gesture-handler';
import {Col, Grid, Row} from 'react-native-easy-grid';

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

const CardComponent: FC<ICardComponentProps> = ({cardHeading, cardContent}) => {
  const renderItem = ({
    item,
  }: {
    item: {
      line: string;
      receiveInfo: string;
      sizeS: number;
      sizeM: number;
      sizeL: number;
      status: string;
    };
  }) => (
    <Grid style={styles.cardContentStyle}>
        <Col size={1.5} style={styles.lineContentStyle}>
          <Text style={styles.lineText}>{item.line}</Text>
        </Col>
        <Col size={3} style={styles.informationContentStyle}>
          <Text style={styles.receiveInfoText}>{item.receiveInfo}</Text>
          <View style={styles.sizeContentStyle}>
            <Text style={styles.sizeQtyText}>
              S:
              {item.sizeS}
            </Text>
            <Text style={styles.sizeQtyText}>
              M:
              {item.sizeM}
            </Text>
            <Text style={styles.sizeQtyText}>
              L:
              {item.sizeL}
            </Text>
            <Text style={styles.sizeQtyText}>
              M:
              {item.sizeM}
            </Text>
            <Text style={styles.sizeQtyText}>
              L:
              {item.sizeL}
            </Text>
          </View>
        </Col>
        <Col size={1}>
          <Text style={item.status === 'CONFIRM' ? styles.statusTextConfirm : item.status === 'CANCEL' ? styles.statusTextCancel: item.status === 'PENDING' ? styles.statusTextPending : '' }>{item.status}</Text>
        </Col>
   
    </Grid>
  );
  return (
    <Grid>
      <Col>
        <Row
          size={1}
          style={{
            alignItems: 'center',
          }}>
          <Text style={styles.cardHeading}>{cardHeading}</Text>
        </Row>
        <Row style={styles.cardStyle} size={8}>
          <FlatList
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

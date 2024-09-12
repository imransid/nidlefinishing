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
    <View style={styles.cardContentStyle}>
      <>
        <View style={styles.lineContentStyle}>
          <Text style={styles.lineText}>{item.line}</Text>
        </View>
        <View style={styles.informationContentStyle}>
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
          </View>
        </View>
        <View>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </>
    </View>
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

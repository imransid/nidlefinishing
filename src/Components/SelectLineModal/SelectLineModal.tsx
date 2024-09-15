import React, { Dispatch, FC, SetStateAction } from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import TreeSelect from 'react-native-tree-select';
import TreeIcon from 'react-native-vector-icons/Ionicons';

interface ISelectLineModalProps {
  lineModalVisible: boolean;
  setSelectedLine: Dispatch<SetStateAction<string>>;
  orgTreeData: Array<{}>;
  setLineModalVisible: (visible: boolean) => void;
  onClickAble?: (e: number) => void;
  pageName: string
}
const SelectLineModal: FC<ISelectLineModalProps> = ({
  lineModalVisible,
  setSelectedLine,
  orgTreeData,
  setLineModalVisible,
  onClickAble,
  pageName
}) => {
  const [treeOpen, setTreeOpen] = React.useState<boolean>(false);
  const onClickLeaf = async (data: any): Promise<any> => {
    try {
      if (onClickAble) {
        onClickAble(data.item.id);  // or pass any number you need
      }
      setSelectedLine(data.item.name);
      setLineModalVisible(false);
    } catch (error) {
      console.error('Error during onClickLeaf execution:', error);
      // setLoader(false); // Stop loader
    } finally {
      // setLoader(false); // Stop loader
      setTreeOpen(false);
    }
  };
  return (
    <>
      <Modal
        style={{ flex: 1, height: '100%', width: '100%' }}
        visible={lineModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setLineModalVisible(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent background
          }}>
          <View
            style={{
              maxWidth: '50%',
              minWidth: '50%',
              maxHeight: '50%',
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: '#ededed',
              padding: 20,
            }}>
            <ScrollView
              nestedScrollEnabled
              showsVerticalScrollIndicator={false}
              style={{ backgroundColor: 'transparent' }}>
              <TreeSelect
                onClickLeaf={onClickLeaf}
                data={orgTreeData}
                isOpen={treeOpen}
                defaultSelectedId={['B062']}
                isShowTreeId={false}
                selectType="single"
                itemStyle={{
                  backgroundColor: 'transparent',
                  fontSize: 14,
                  color: '#747474',
                }}
                selectedItemStyle={{
                  backgroundColor: 'transparent',
                  fontSize: 14,
                  color: '#8BC6FC',
                }}
                treeNodeStyle={{
                  openIcon: (
                    <TreeIcon
                      style={{
                        fontSize: 20,
                        color: '#6CAEF1',
                      }}
                      name="checkmark"
                    />
                  ),
                  closeIcon: <TreeIcon style={{ fontSize: 20 }} name="menu" />,
                }}
              />
            </ScrollView>
            {/* Close modal button */}
            <TouchableOpacity
              style={{
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                backgroundColor: '#3C4FE9',
              }}
              onPress={() => setLineModalVisible(false)}>
              <Text style={{ color: 'white' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SelectLineModal;

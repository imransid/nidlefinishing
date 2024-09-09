import React, { type FC, useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';

import type IDoseInputModalProps from '../../Interfaces/IDoseInputModalProps';

import styles from './style';

const DoseInputModal: FC<IDoseInputModalProps> = ({
  visible,
  onClose,
  onSubmit,
  numKeybaordType
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleOkPress: any = () => {
    onSubmit(inputValue);
    setInputValue('');
    onClose();
  };

  const handleCancelPress: any = () => {
    setInputValue('');
    onClose();
  };

  return (
    <Modal transparent={true} animationType="slide" visible={visible} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Dose</Text>
          <TextInput
            style={styles.textInput}
            maxLength={2}
            value={inputValue}
            onChangeText={setInputValue}
            keyboardType={numKeybaordType ? 'numeric' : 'email-address'}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={handleCancelPress}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.okButton} onPress={handleOkPress}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DoseInputModal;

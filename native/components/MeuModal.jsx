import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function MeuModal({ open, onClose }) {

  const handlePress = (acao) => {
    // Faça algo com o valor do peso e a ação escolhida (Perder Peso ou Ganhar Peso)
    // ...

    // Feche o modal
    onClose();
  };

  return (
    <Modal animationType='fade' transparent={true} visible={open} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>

          <TextInput  />
          <TouchableOpacity  onPress={onClose}>
            <Text >Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Define um fundo escuro translúcido
  },
  modal: {
    width: '90%',
    backgroundColor: '#25242c',
    borderRadius: 10,
    padding: 20,
  },
  text: {
    color: '#D8DBE2',
    fontSize: 30,
    marginBottom: 20,
  },
  inputs: {

    borderColor: "#e59638",
    borderWidth: 2,
    borderRadius: 30,
    padding: 15,
    color: '#e59638',
    fontSize: 20,
  },
});

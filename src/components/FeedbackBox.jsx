import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const FeedbackBox = ({ onClose }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>다시 한번 생각해보세요!</Text>

      <TouchableOpacity style={styles.button} onPress={onClose}>
        <Text style={styles.buttonText}>확인</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '30%',
    left: '10%',
    right: '10%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    zIndex: 1,
  },
  button: {
    height: 30,
    backgroundColor: '#ffffff',
    borderColor: '#3498db',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  message: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonText: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default FeedbackBox;

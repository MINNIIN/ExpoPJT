import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { images } from '../images';

const Timer = () => {
  
  const placeholderTime = "00:00"; 

  return (
    <View style={styles.timerContainer}>
      <Image source={images.timer} style={styles.timerIcon}></Image>
      <Text style={styles.timerText}>{placeholderTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#BDBDBD',
    borderWidth: 1,
    backgroundColor: '#ffffff', 
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000'
  },
  timerIcon: {
    width: 25,
    height: 25, 
    tintColor: '#000000',
    marginRight: 5,
  },
  timerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default Timer;

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { images } from '../images';
import { View } from 'react-native-web';


const NextButton = ({ nextScreen, label, onPress }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{label}</Text>
      <Image source={images.rightArrow} style={styles.nextIcon}/>
    </TouchableOpacity>
  );
};

NextButton.propTypes = {
  nextScreen: PropTypes.string.isRequired, // 다음 화면 이름
  label: PropTypes.string, // 버튼에 표시될 텍스트
  onPress: PropTypes.func.isRequired, // 버튼 클릭 핸들러
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffffff',
    width: 120,
    height: 40,
    justifyContent: 'center',
    borderColor: '#3498db',
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    margin: 3,
  },
  buttonText: {
    color: '#3498db',
    fontSize: 18,
    textAlign: 'center',
  },
  nextIcon: {
    width: 25,
    height: 25, 
    tintColor: '#3498db',
    marginLeft: 5,
  },
});

export default NextButton;

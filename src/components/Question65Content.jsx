import React, { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';



// 정답, 정답체크, 오답
const Question65Content = ( { correctAnswers, onAnswerCheck, incorrectAnswers } ) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const toggleSelection = (itemkey) => {
        const updateSelection = selectedItems.includes(itemkey)
        ? selectedItems.filter((key) => key !== itemkey)
        : [...selectedItems, itemkey];

        setSelectedItems(updateSelection);

        const isCorrect = correctAnswers.every((answer) => updateSelection.includes(answer)) && 
        !incorrectAnswers.some((wrongAnswer) => updateSelection.includes(wrongAnswer)); 

        onAnswerCheck(isCorrect);
    };

    const imageList = [
        { key: 'sejong', source: require('../../assets/sejong.png') },
        { key: 'yulgok', source: require('../../assets/yulgok.png') },
        { key: 'yiSunsin', source: require('../../assets/yiSunsin.png') },
    ]

    return (
        <View style={styles.gridContainer}>
            {imageList.map((item) => (
                <TouchableOpacity
                    key={item.key}
                    onPress={() => toggleSelection(item.key)}
                    style={[
                      styles.imageContainer,
                      selectedItems.includes(item.key) && styles.selectedImage,
                    ]}
                  >
                    <Image source={item.source} style={styles.image} resizeMode="contain" />
                </TouchableOpacity>
      ))}
    </View>
    );
};

Question65Content.propTypes = {
    correctAnswers: PropTypes.array.isRequired,
    incorrectAnswers: PropTypes.array.isRequired,
    onAnswerCheck: PropTypes.func.isRequired,
  };
  
  const styles = StyleSheet.create({
    gridContainer: {
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    imageContainer: {
      width: '30%',
      height: 150,
      marginBottom: 15,
      borderWidth: 2,
      borderColor: 'transparent',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 130,
      height: 140,
    },
    selectedImage: {
      borderColor: 'blue', // 선택된 이미지 색
    },
  });
  

export default Question65Content;
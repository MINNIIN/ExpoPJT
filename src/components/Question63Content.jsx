import React, { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';




const Question63Content = ( { correctAnswers, onAnswerCheck, incorrectAnswers } ) => {
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
        { key: 'knife', source: require('../../assets/knifeImage.png') },
        { key: 'scissors', source: require('../../assets/scissorsImage.png') },
        { key: 'umbrella', source: require('../../assets/umbrellaImage.png') },
        { key: 'sauce', source: require('../../assets/redPepperSauce.png') },
        { key: 'camera', source: require('../../assets/cameraImage.png') },
        { key: 'butane', source: require('../../assets/butaneGas.png') },
        { key: 'coke', source: require('../../assets/cokeImage.png') },
        { key: 'tissue', source: require('../../assets/tissueImage.png') },
        { key: 'spray', source: require('../../assets/sprayImage.png') },
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

Question63Content.propTypes = {
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
      height: 100,
      marginBottom: 15,
      borderWidth: 2,
      borderColor: 'transparent',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 80,
      height: 80,
    },
    selectedImage: {
      borderColor: 'blue', 
    },
  });
  

export default Question63Content;
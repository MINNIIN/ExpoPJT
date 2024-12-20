import React from 'react';
import { View, StyleSheet } from 'react-native';

const PageSlide = ({ totalQuestions, currentQuestion }) => {
  return (
    <View style={styles.slideContainer}>
      {Array.from({ length: totalQuestions }, (_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            currentQuestion === index + 1 && styles.activeDot, 
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  slideContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'blue', 
  },
});

export default PageSlide;
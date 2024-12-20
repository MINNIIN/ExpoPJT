import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NextButton from '../components/NextButton';
import Question63Content from '../components/Question63Content';
import FeedbackBox from '../components/FeedbackBox';
import { useNavigation } from '@react-navigation/native';
import Timer from '../components/Timer';
import PageSlide from '../components/PageSlide';



const Question63 = () => {
  const correctAnswers = ['knife', 'scissors', 'sauce', 'butane', 'coke', 'spray']; // 정답 사물
  const incorrectAnswers = ['umbrella', 'camera', 'tissue'];
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const navigation = useNavigation();
  
  const totalQuestions = 9; 
  const [currentQuestion, setCurrentQuestion] = useState(2); 

  const handleAnswerCheck = (isCorrect) => {
    setIsAnswerCorrect(isCorrect);
  };

  const handleNextButtonPress = () => {
    if (isAnswerCorrect) {
      navigation.navigate('Question63t');
      
    } else {
      setShowFeedback(true);
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>문제 63번</Text>
        <Timer/>
      </View>
      
      

      <View style={styles.questionContainer}>
      <Text style={styles.questionText}>앞서 기억해 둔 기내반입 금지물품을 모두 선택하세요.</Text>
      <Question63Content
        correctAnswers={correctAnswers}
        incorrectAnswers={incorrectAnswers}
        onAnswerCheck={handleAnswerCheck}
      />
      </View>
      
      <View style={styles.bottomContainer}>
        <PageSlide totalQuestions={totalQuestions} currentQuestion={currentQuestion} ></PageSlide>
        <NextButton nextScreen="Question63t" label="문제 63-2" onPress={handleNextButtonPress} />
      </View>
      {showFeedback && ( 
        <FeedbackBox onClose={() => setShowFeedback(false)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  questionContainer: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    marginBottom: 10,
    
  },
  titleText: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  questionText: {
    fontSize: 17,
    marginBottom: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  bottomContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    bottom: 20,
    left: 10, 
    right: 10,
  },
  
});

export default Question63;
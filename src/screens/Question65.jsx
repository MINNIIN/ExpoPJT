import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NextButton from '../components/NextButton';
import Question65Content from '../components/Question65Content';
import FeedbackBox from '../components/FeedbackBox';
import { useNavigation } from '@react-navigation/native';
import Timer from '../components/Timer';
import Question65Middle from '../components/Question65Middle';
import PageSlide from '../components/PageSlide';




const Question65 = () => {
  const correctAnswers = ['sejong']; 
  const incorrectAnswers = ['yulgok', 'yiSunsin'];
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const navigation = useNavigation();

  const totalQuestions = 9; 
  const [currentQuestion, setCurrentQuestion] = useState(5); 
  
  
  const handleAnswerCheck = (isCorrect) => {
    setIsAnswerCorrect(isCorrect);
  };

  const handleNextButtonPress = () => {
    if (isAnswerCorrect) {
      navigation.navigate('Question65t');
      
    } else {
      setShowFeedback(true);
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>문제 65번</Text>
        <Timer/>
      </View>
    
      

      
      <View style={styles.questionContainer}>
      <Text style={styles.questionText}>다음의 화폐와 알맞는 인물을 선택하세요.</Text>
      <Question65Middle/>
      <Question65Content
        correctAnswers={correctAnswers}
        incorrectAnswers={incorrectAnswers}
        onAnswerCheck={handleAnswerCheck}
      />
      </View>
      
      <View style={styles.bottomContainer}>
        <PageSlide totalQuestions={totalQuestions} currentQuestion={currentQuestion} ></PageSlide>
        <NextButton nextScreen="Question63t" label="문제 65-2" onPress={handleNextButtonPress} />
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

export default Question65;
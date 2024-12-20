import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NextButton from '../components/NextButton';
import Question65tContent from '../components/Question65tContent';
import FeedbackBox from '../components/FeedbackBox';
import { useNavigation } from '@react-navigation/native';
import Timer from '../components/Timer';
import Question65tMiddle from '../components/Question65tMiddle.jsx';
import PageSlide from '../components/PageSlide.jsx';



const Question65t = () => {
  const correctAnswers = ['yiHwang']; // 정답 사물
  const incorrectAnswers = ['gwanggaeto', 'jeongYakyong'];
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const navigation = useNavigation();

  const totalQuestions = 9; 
  const [currentQuestion, setCurrentQuestion] = useState(6); 
  
  const handleAnswerCheck = (isCorrect) => {
    setIsAnswerCorrect(isCorrect);
  };

  const handleNextButtonPress = () => {
    if (isAnswerCorrect) {
      navigation.navigate('Question66');
    } else {
      setShowFeedback(true);
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>문제 65-2번</Text>
        <Timer/>
      </View>
      
      

      
      <View style={styles.questionContainer}>
      <Text style={styles.questionText}>다음의 화폐와 알맞는 인물을 선택하세요.</Text>
      <Question65tMiddle/>
      <Question65tContent
        correctAnswers={correctAnswers}
        incorrectAnswers={incorrectAnswers}
        onAnswerCheck={handleAnswerCheck}
      />
      </View>
      
      <View style={styles.bottomContainer}>
        <PageSlide totalQuestions={totalQuestions} currentQuestion={currentQuestion} ></PageSlide>
        <NextButton nextScreen="Question66" label="문제 66" onPress={handleNextButtonPress} />
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

export default Question65t;
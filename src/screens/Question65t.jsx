import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NextButton from '../components/NextButton';
import Question65tContent from '../components/Question65tContent';
import FeedbackBox from '../components/FeedbackBox';
import { useNavigation } from '@react-navigation/native';
import Timer from '../components/Timer';
import Question65tMiddle from '../components/Question65tMiddle.jsx';



const Question65t = () => {
  const correctAnswers = ['yiHwang']; // 정답 사물
  const incorrectAnswers = ['gwanggaeto', 'jeongYakyong'];
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const navigation = useNavigation();
  
  const handleAnswerCheck = (isCorrect) => {
    setIsAnswerCorrect(isCorrect);
  };

  const handleNextButtonPress = () => {
    if (isAnswerCorrect) {
      // 정답일 경우 다음 화면으로 이동 . 66번으로 수정할것
      navigation.navigate('Question63t');
      
    } else {
      // 오답일 경우 FeedbackBox 표시
      setShowFeedback(true);
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>문제 65-2번</Text>
        <Timer/>
      </View>
      
      <Text style={styles.questionText}>다음의 화폐와 알맞는 인물을 선택하세요.</Text>

      
      <View style={styles.questionContainer}>
      <Question65tMiddle/>
      <Question65tContent
        correctAnswers={correctAnswers}
        incorrectAnswers={incorrectAnswers}
        onAnswerCheck={handleAnswerCheck}
      />
      </View>
      
      <View style={styles.bottomContainer}>
        {/* NextButton에 다음 화면 이름 전달 */}
            <NextButton nextScreen="Question63t" label="문제 63-2" onPress={handleNextButtonPress} />
      </View>
      {showFeedback && ( // true면 피드백 박스 나타남
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
    paddingHorizontal: 10,
    paddingVertical: 5,
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
    bottom: 20,
    right: 20,
  },
  
});

export default Question65t;
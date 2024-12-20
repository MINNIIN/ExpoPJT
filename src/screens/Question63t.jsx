import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NextButton from '../components/NextButton';
import FeedbackBox from '../components/FeedbackBox';
import { useNavigation } from '@react-navigation/native';
import Timer from '../components/Timer';
import Question63tContent from '../components/Question63tContent';
import PageSlide from '../components/PageSlide';

const Question63t = () => {


    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);
    const navigation = useNavigation();

    const totalQuestions = 9; 
    const [currentQuestion, setCurrentQuestion] = useState(3); 

    const handleNextButtonPress = () => {
        navigation.navigate('Question64')
      };

    return (
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.titleText}>문제 63-2번</Text>
            <Timer/>
          </View>
          
          
    
          <View style={styles.questionContainer}>
          <Text style={styles.questionText}>다음과 같이 가로의 기호와 세로의 모양을 합쳐 그려보세요.</Text>
          <Question63tContent></Question63tContent>
          </View>
          
          <View style={styles.bottomContainer}>
                <PageSlide totalQuestions={totalQuestions} currentQuestion={currentQuestion} ></PageSlide>
                <NextButton nextScreen="Question64" label="문제 64" onPress={handleNextButtonPress} />
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
    

export default Question63t;
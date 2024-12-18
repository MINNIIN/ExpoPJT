import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NextButton from '../components/NextButton';
import FeedbackBox from '../components/FeedbackBox';
import { useNavigation } from '@react-navigation/native';
import Timer from '../components/Timer';
import Question63tContent from '../components/Question63tContent';
// import styled from "styled-components";   / npm install styled-components
// import { Link }

const Question63t = () => {

// 정답 처리 및 화면 전환 코드
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);
    const navigation = useNavigation();

    const handleNextButtonPress = () => {
        navigation.navigate('Question65')
      };

    return (
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.titleText}>문제 63-2번</Text>
            <Timer/>
          </View>
          
          <Text style={styles.questionText}>다음과 같이 가로의 기호와 세로의 모양을 합쳐 그려보세요.</Text>
    
          <View style={styles.questionContainer}>
          <Question63tContent></Question63tContent>
          </View>
          
          <View style={styles.bottomContainer}>
                <NextButton nextScreen="Question65" label="문제 65" onPress={handleNextButtonPress} />
          </View>
          {showFeedback && ( // true면 피드백 박스 나타남
            <FeedbackBox onClose={() => setShowFeedback(false)} />
          )}
        </View>
      );
    };
    

    // const Container = styled.Vidw`
    // flex: 1;
    // `;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ffffff',
      },
      questionContainer: {
        flexDirection: 'row',
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
    

export default Question63t;
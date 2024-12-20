import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NextButton from '../components/NextButton';
import Timer from '../components/Timer';
import PageSlide from '../components/PageSlide';

const items = [
  { id: 1, name: '5000원', image: require('../../assets/sgImage/money1.png'), isAllowed: true },
  { id: 2, name: '다용도 칼', image: require('../../assets/sgImage/knife.png'), isAllowed: false },
  { id: 3, name: '50000원', image: require('../../assets/sgImage/money2.png'), isAllowed: true },
  { id: 4, name: '생수', image: require('../../assets/sgImage/water.png'), isAllowed: false },
  { id: 5, name: '고추장', image: require('../../assets/sgImage/gochujang.png'), isAllowed: false },
  { id: 6, name: '가위', image: require('../../assets/sgImage/scissors.png'), isAllowed: false },
  { id: 7, name: '스프레이', image: require('../../assets/sgImage/spray.png'), isAllowed: false },
  { id: 8, name: '귤', image: require('../../assets/sgImage/orange.png'), isAllowed: true },
  { id: 9, name: '헤드폰', image: require('../../assets/sgImage/headphones.png'), isAllowed: true },
];

export default function App() {

  const [results, setResults] = useState({});
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  
  const navigation = useNavigation();

  const totalQuestions = 9; 
  const [currentQuestion, setCurrentQuestion] = useState(8); 


  
  useEffect(() => {
    const correctAnswers = items.filter((item) => item.isAllowed).length;
    const selectedAnswers = Object.keys(results).length; 
    const correctSelected = items.every((item) =>
      item.isAllowed ? results[item.id] === 'O' : true
    );

    setIsAnswerCorrect(selectedAnswers === correctAnswers && correctSelected);
  }, [results]);

  const handleNextButtonPress = () => {
    if (isAnswerCorrect) {
      navigation.navigate('Question68'); 
    } else {
      Alert.alert('모든 정답을 선택해주세요!', '정답을 모두 선택해야 다음으로 진행할 수 있습니다.');
    }
  };

  const handleSelect = (id, isAllowed) => {
    if (!isAllowed) {
      Alert.alert('금지된 물품을 선택하셨습니다!', '처음부터 다시 시도해주세용^^.', [
        { text: '확인', onPress: () => setResults({}) },
      ]);
    } else {
      setResults((prev) => ({
        ...prev,
        [id]: 'O',
      }));
      
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.topContainer}>
      <Text style={styles.header}>문제 67번</Text>
      <Timer/>
      </View>

      
      <Text style={styles.problem}>
        다음 물품들 중 기내반입이 가능한 물품을 눌러보세요!
      </Text>

      
      <View style={styles.gridContainer}>
        {items.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.gridItem}
            onPress={() => handleSelect(item.id, item.isAllowed)}
          >
            
            <Image source={item.image} style={styles.image} />
            
            {results[item.id] && (
              <View style={styles.overlay}>
                <Text style={styles.overlayText}>{results[item.id]}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.bottomContainer}>
        <PageSlide totalQuestions={totalQuestions} currentQuestion={currentQuestion} ></PageSlide>
        <NextButton nextScreen="Question68" label="문제 68" onPress={handleNextButtonPress}/>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 10,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    marginBottom: 10,
    marginTop: 10,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  headerContainer: {
    marginTop: 80,
    marginBottom: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  problem: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#555',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: '#fff',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 3,
    position: 'relative', 
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  overlayText: {
    fontSize: 50, 
    fontWeight: 'bold',
    color: '#FF0000', 
  },
});

import React, { use, useState } from 'react';
import { View, TextInput, Image, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';
import FeedbackBox from '../components/FeedbackBox';
import PageSlide from '../components/PageSlide';
import Timer from '../components/Timer';
import NextButton from '../components/NextButton';
import { useNavigation } from '@react-navigation/native';


const Question66 = ()=> {
  const [inputs, setInputs] = useState(["", "", "", "", "", ""]); 
  const correctAnswers = ["부탄가스", "칼", "액체", "스프레이", "고추장", "가위"];
  const [showFeedback, setShowFeedback] = useState(false);

  const navigation = useNavigation();

  const totalQuestions = 9; 
  const [currentQuestion, setCurrentQuestion] = useState(7); 

  const handleInputChange = (text, index) => {
    const newInputs = [...inputs];
    newInputs[index] = text;
    setInputs(newInputs);
  };

  const checkAnswers = () => {
    const isCorrect =
      inputs.length === correctAnswers.length &&
      inputs.sort().join() === correctAnswers.sort().join();
  
    if (isCorrect) {
    
      Alert.alert("정답입니다!", "다음 페이지로 이동합니다.", [
        { text: "확인", onPress: () => navigation.navigate("Question67") },
      ]);
      navigation.navigate('Question67')
    } else {
      setShowFeedback(true);
    }
  };
  


  
  return (
    <View style={styles.container}>

    <View style={styles.topContainer}>
        <Text style={styles.titleText}>문제 66번</Text>
        <Timer/>
    </View>

      <Text style={styles.text}>
      다음의 글자들을 조합하여, 앞서 기억해 둔 기내반입 금지물품 이름을 찾아 적어보세요.
      </Text>

      <Image source={require('../../assets/jhImage/P66image.png')} style={styles.image} /> 

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="1번 입력"
          value={inputs[0]}
          onChangeText={(text) => handleInputChange(text, 0)}
        />
        <TextInput
          style={styles.input}
          placeholder="2번 입력"
          value={inputs[1]}
          onChangeText={(text) => handleInputChange(text, 1)}
        />
        <TextInput
          style={styles.input}
          placeholder="3번 입력"
          value={inputs[2]}
          onChangeText={(text) => handleInputChange(text, 2)}
        />
        <TextInput
          style={styles.input}
          placeholder="4번 입력"
          value={inputs[3]}
          onChangeText={(text) => handleInputChange(text, 3)}
        />
        <TextInput
          style={styles.input}
          placeholder="5번 입력"
          value={inputs[4]}
          onChangeText={(text) => handleInputChange(text, 4)}
        />
        <TextInput
          style={styles.input}
          placeholder="6번 입력"
          value={inputs[5]}
          onChangeText={(text) => handleInputChange(text, 5)}
        />
      </View>

      

      <View style={styles.bottomContainer}>
        <PageSlide totalQuestions={totalQuestions} currentQuestion={currentQuestion} ></PageSlide>
        <NextButton nextScreen="Question67" label="문제 67" onPress={checkAnswers} />
      </View>

      {showFeedback && <FeedbackBox onClose={() => setShowFeedback(false)} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
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
    marginRight: 150
  },
  image: {
    width:300,
    height: 300,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginBottom: 20,
    lineHeight:35,
  },
  inputGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  input: {
    width: '45%',
    height: 50,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  button: {
    width:100,
    height:40,
    backgroundColor: '#0000FF',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 23,
    fontWeight: '600',
    textAlign: 'center',
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

export default Question66;
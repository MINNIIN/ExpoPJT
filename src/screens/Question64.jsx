import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Alert, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import FeedbackBox from '../components/FeedbackBox';
import Timer from '../components/Timer';
import PageSlide from '../components/PageSlide';

const Question64 = ({ navigation }) => {
  const correctAnswer = "9번"; 
  const options = [
    { text: "1번", image: require('../../assets/jhImage/opt1.png') },
    { text: "2번", image: require('../../assets/jhImage/opt2.png') },
    { text: "3번", image: require('../../assets/jhImage/opt3.png') },
    { text: "4번", image: require('../../assets/jhImage/opt4.png') },
    { text: "5번", image: require('../../assets/jhImage/opt5.png') },
    { text: "6번", image: require('../../assets/jhImage/opt6.png') },
    { text: "7번", image: require('../../assets/jhImage/opt7.png') },
    { text: "8번", image: require('../../assets/jhImage/opt8.png') },
    { text: "9번", image: require('../../assets/jhImage/opt9.png') },
    { text: "10번", image: require('../../assets/jhImage/opt10.png') },
    { text: "11번", image: require('../../assets/jhImage/opt11.png') },
    { text: "12번", image: require('../../assets/jhImage/opt12.png') },

  
  ]; 

  const [showFeedback, setShowFeedback] = useState(false);

  const totalQuestions = 9; 
  const [currentQuestion, setCurrentQuestion] = useState(4); 

  const handleAnswerPress = (answer) => {
    if (answer === correctAnswer) {
      Alert.alert("정답입니다!", "다음 페이지로 이동합니다.", [
        { text: "확인", onPress: () => navigation.navigate("Question65") },
      ]);
    } else {
      setShowFeedback(true);
    }
  };

  const width = Dimensions.get('window').width;

  return (
    <View style={styles.container}>

      <View style={styles.topContainer}>
        <Text style={styles.titleText}>문제 64번</Text>
        <Timer/>
      </View>

      <Text style={styles.text}>
        다음 이미지에서 별이 그려져있는 도형과 같은 모양을 보기에서 고르세요.
      </Text>

      <Image source={require('../../assets/jhImage/P64image.png')} style={styles.image} />

      <ScrollView
        style={[styles.scrollView, { width: width - 40 }]}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.optiongroup}>
            
        <TouchableOpacity
              style={styles.optionItem}
              onPress={() => handleAnswerPress(options[0].text)}>
              <Image source={options[0].image} style={styles.optionImage} />
              <Text style={styles.optionText}>{options[0].text}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionItem}
              onPress={() => handleAnswerPress(options[1].text)}>
              <Image source={options[1].image} style={styles.optionImage} />
              <Text style={styles.optionText}>{options[1].text}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionItem}
              onPress={() => handleAnswerPress(options[2].text)}>
              <Image source={options[2].image} style={styles.optionImage} />
              <Text style={styles.optionText}>{options[2].text}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionItem}
              onPress={() => handleAnswerPress(options[3].text)}>
              <Image source={options[3].image} style={styles.optionImage} />
              <Text style={styles.optionText}>{options[3].text}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionItem}
              onPress={() => handleAnswerPress(options[4].text)}>
              <Image source={options[4].image} style={styles.optionImage} />
              <Text style={styles.optionText}>{options[4].text}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionItem}
              onPress={() => handleAnswerPress(options[5].text)}>
              <Image source={options[5].image} style={styles.optionImage} />
              <Text style={styles.optionText}>{options[5].text}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionItem}
              onPress={() => handleAnswerPress(options[6].text)}>
              <Image source={options[6].image} style={styles.optionImage} />
              <Text style={styles.optionText}>{options[6].text}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionItem}
              onPress={() => handleAnswerPress(options[7].text)}>
              <Image source={options[7].image} style={styles.optionImage} />
              <Text style={styles.optionText}>{options[7].text}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionItem}
              onPress={() => handleAnswerPress(options[8].text)}>
              <Image source={options[8].image} style={styles.optionImage} />
              <Text style={styles.optionText}>{options[8].text}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionItem}
              onPress={() => handleAnswerPress(options[9].text)}>
              <Image source={options[9].image} style={styles.optionImage} />
              <Text style={styles.optionText}>{options[9].text}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionItem}
              onPress={() => handleAnswerPress(options[10].text)}>
              <Image source={options[10].image} style={styles.optionImage} />
              <Text style={styles.optionText}>{options[10].text}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionItem}
              onPress={() => handleAnswerPress(options[11].text)}>
              <Image source={options[11].image} style={styles.optionImage} />
              <Text style={styles.optionText}>{options[11].text}</Text>
            </TouchableOpacity>

          
        </View>

      </ScrollView>

      <View style={styles.bottomContainer}>
        <PageSlide totalQuestions={totalQuestions} currentQuestion={currentQuestion} ></PageSlide>
      </View>

      {showFeedback && <FeedbackBox onClose={() => setShowFeedback(false)} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    lineHeight: 35,
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
  bottomContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    bottom: 20,
    left: 10, 
    right: 10,
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 10,
    marginTop:-20,
  },
  optionImage: {
    width: 100, 
    height: 100,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  optiongroup: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between', 
    paddingVertical: 10, 
    paddingHorizontal:20,
  },
  optionItem: {
    width: '50%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  scrollView: {
    flex: 1,
    maxHeight: 400,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom:40,
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingVertical: 10,
  },

  optionText: {
    fontSize: 16,
    color: 'black',
  },
});

export default Question64;

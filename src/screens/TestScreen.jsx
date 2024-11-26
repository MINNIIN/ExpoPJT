import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TestScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>크로스플랫폼 앱프로그래밍</Text>

        <View style={styles.textContainer}>
        <Text style={styles.text}>1. src/screens에 개발 페이지.jsx 파일 생성하시고 문제 페이지 개발해주시면 됩니다!</Text>
        <Text style={styles.text}>2. 진행상황 확인 방법: Navigator.jsx에 생성하신 jsx 파일 import 하시고 NavigationContainer에도 정의!</Text>
        <Text style={styles.text}>3. 버튼 클릭을 통한 화면전환 방식입니다!</Text>
        <Text style={styles.text}>4. 버튼 onPress, navigation.navigate('이동할페이지') 사용해서 버튼 활성화!</Text>

        <Text style={styles.text}>- 승규님 : 62, 67 페이지 개발 진행</Text>
        <Text style={styles.text}>- 주현님 : 64, 66 페이지 개발 진행</Text>
        <Text style={styles.text}>- 희원님 : 68, 메인 페이지 개발 진행</Text>
        </View>
        
        <Button
          title="메인페이지"
          onPress={() => navigation.navigate('Question63')}
        /> 
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    textContainer: { margin: '15px'},
    text: { fontSize: 14, marginBottom: '5px'}
  });
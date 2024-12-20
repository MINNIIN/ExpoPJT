import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffff99; /* 노란색 배경 */
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  width: 80%;
  height: 50px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  background-color: #007bff;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    if (username && password) {
      try {
        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('password', password);
        Alert.alert('회원가입 성공');
        navigation.navigate('Main');
      } catch (error) {
        Alert.alert('회원가입 중 오류가 발생했습니다.');
      }
    } else {
      Alert.alert('아이디와 비밀번호를 모두 입력해주세요.');
    }
  };

  return (
    <Container>
      <StyledText>회원가입 페이지</StyledText>

      <Input
        placeholder="아이디"
        value={username}
        onChangeText={setUsername}
      />
      <Input
        placeholder="암호"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <Button onPress={handleSignup}>
        <ButtonText>가입</ButtonText>
      </Button>

      <Button onPress={() => navigation.goBack()}>
        <ButtonText>뒤로 가기</ButtonText>
      </Button>
    </Container>
  );
};

export default SignupScreen;

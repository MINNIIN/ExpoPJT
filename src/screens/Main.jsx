import React, { useState } from 'react';
import styled from 'styled-components/native';
import ImageComponent from '../Image';
import { Modal, Text, TouchableOpacity, Alert } from 'react-native'; //새로운 레이아웃, 설명창
import AsyncStorage from '@react-native-async-storage/async-storage'; // 아이디 비밀번호 저장 

const Container = styled.SafeAreaView` 
  flex: 1;
  background-color: #ffff99; /* 노란색 배경 */
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
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

const ModalContent = styled.View`
  flex: 1;
  background-color: #ffff99;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 10px;
  background-color: #007bff;
  border-radius: 5px;
`;

const CloseButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

const Main = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);{/*모달이 보이는지 여부 */}
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {

      const storedUsername = await AsyncStorage.getItem('username');{/*스토리지에 저장된 값 불러옴 */}
      const storedPassword = await AsyncStorage.getItem('password');

      if (username === storedUsername && password === storedPassword) {
        Alert.alert('로그인 성공', '환영합니다!');
        navigation.navigate('Question62');
      } else {
        Alert.alert('로그인 실패', '아이디 또는 비밀번호가 잘못되었습니다.');
      }
    } catch (error) {
      Alert.alert('오류', '로그인 중 오류가 발생했습니다.');
    }
  };

  return (
    <Container>
      <Title>크로스 플랫폼 QUIZ</Title>

      <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 20 }}>이미지를 클릭하세요!</Text>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <ImageComponent
          source={require('../../assets/hwImage/icon1.png')}
          width="120px"
          height="120px"
          marginBottom="40px"
        />
      </TouchableOpacity>

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

      <Button onPress={handleLogin}>
        <ButtonText>입장</ButtonText>
      </Button>{/*모달이 보이는지 여부 */}

      <Button onPress={() => navigation.navigate('SignupScreen')}>
        <ButtonText>회원가입</ButtonText>
      </Button>

      {/* 모달 창 */}
      <Modal visible={modalVisible} transparent={true} animationType="slide"> 
        <ModalContent>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
            이 앱에 대한 설명
          </Text>
          <Text style={{ fontSize: 16, textAlign: 'center' }}>
            이 앱은 크로스 플랫폼에서 동작하는 노인들 대상 치매예방 퀴즈 앱입니다. React Native를 사용하여 개발되었으며, 사용자가 퀴즈를 풀고 학습할 수 있도록 설계되었습니다.
          </Text>
          <CloseButton onPress={() => setModalVisible(false)}>
            <CloseButtonText>닫기</CloseButtonText>
          </CloseButton>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Main;

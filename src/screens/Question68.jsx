import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ScrollView, Text, Alert, StyleSheet } from 'react-native';



const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffff99;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;
const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const Input = styled.TextInput`
  flex: 1;
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 5px;
  margin-right: 10px;
  text-align: center;
  background-color: #f9f9f9;
`;

const UnderlineInput = styled.TextInput`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: #000;
  padding: 8px;
  text-align: center;
  background-color: #f9f9f9;
  margin-right: 10px;
`;


const Table = styled.View`
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

const TableRow = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

const TableCell = styled.View`
  flex: 1;
  padding: 10px;
  border-right-width: 1px;
  border-right-color: #ccc;
`;

const LastTableCell = styled.View`
  flex: 1;
  padding: 10px;
`;

const TableHeader = styled.Text`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

const PlanInput = styled.TextInput`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  height: 60px;
  text-align-vertical: top;
  background-color: #f9f9f9;
  margin-bottom: 20px;
`;

const Button = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 12px;
  border-radius: 5px;
  align-items: center;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const SectionHeader = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;


export default function Question68({navigation}) {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [weather, setWeather] = useState('');
  const [visitedPlace, setVisitedPlace] = useState('');
  const [personMet, setPersonMet] = useState('');
  const [itemBought, setItemBought] = useState('');
  const [spentAmount, setSpentAmount] = useState('');
  const [news, setNews] = useState('');
  const [morningTask, setMorningTask] = useState('');
  const [morningActivity, setMorningActivity] = useState('');
  const [afternoonTask, setAfternoonTask] = useState('');
  const [eveningTask, setEveningTask] = useState('');
  const [tomorrowPlan, setTomorrowPlan] = useState('');
  

  
  const handleSave = () => {
    if (
      year &&
      month &&
      day &&
      dayOfWeek &&
      weather &&
      visitedPlace &&
      personMet &&
      itemBought &&
      spentAmount &&
      news &&
      morningTask &&
      morningActivity &&
      afternoonTask &&
      eveningTask &&
      tomorrowPlan
    ) {
      Alert.alert('끝났습니다', '수고하셨습니다!', [
        {
          text: '확인',
          onPress: () => navigation.navigate('Main'),
        },
      ]);
    } else {
      Alert.alert('모든 항목을 작성해 주세요.');
    }
  };


  return (
    <Container>
      <ScrollView>
        <Title>일기</Title>

        
        <Row>
          <UnderlineInput placeholder="년" value={year} onChangeText={setYear} />
          <UnderlineInput placeholder="월" value={month} onChangeText={setMonth} />
          <UnderlineInput placeholder="일" value={day} onChangeText={setDay} />
          <UnderlineInput placeholder="요일" value={dayOfWeek} onChangeText={setDayOfWeek} />
          <UnderlineInput placeholder="날씨" value={weather} onChangeText={setWeather} />
        </Row>

        
        <SectionHeader>나의 하루</SectionHeader>
        <Table>
          <TableRow>
            <TableCell>
              <TableHeader>방문한 장소</TableHeader>
              <Input value={visitedPlace} onChangeText={setVisitedPlace} />
            </TableCell>
            <LastTableCell>
              <TableHeader>오늘 만난 사람</TableHeader>
              <Input value={personMet} onChangeText={setPersonMet} />
            </LastTableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <TableHeader>구입한 물건</TableHeader>
              <Input value={itemBought} onChangeText={setItemBought} />
            </TableCell>
            <LastTableCell>
              <TableHeader>지출 금액</TableHeader>
              <Input value={spentAmount} onChangeText={setSpentAmount} />
            </LastTableCell>
          </TableRow>

          <TableRow>
            <LastTableCell>
              <TableHeader>오늘의 뉴스</TableHeader>
              <Input value={news} onChangeText={setNews} />
            </LastTableCell>
          </TableRow>
        </Table>

        
        <SectionHeader>시간대별 중요한 일</SectionHeader>
        <Table>
          <TableRow>
            <TableCell>
              <TableHeader>오전 (5시 ~ 8시)</TableHeader>
              <Input placeholder="중요한 일" value={morningTask} onChangeText={setMorningTask} />
            </TableCell>
            <LastTableCell>
              <TableHeader>오전 (8시 ~ 12시)</TableHeader>
              <Input placeholder="중요한 일" value={morningActivity} onChangeText={setMorningActivity} />
            </LastTableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <TableHeader>오후 (12시 ~ 5시)</TableHeader>
              <Input placeholder="중요한 일" value={afternoonTask} onChangeText={setAfternoonTask} />
            </TableCell>
            <LastTableCell>
              <TableHeader>오후 (5시 ~ 10시)</TableHeader>
              <Input placeholder="중요한 일" value={eveningTask} onChangeText={setEveningTask} />
            </LastTableCell>
          </TableRow>
        </Table>

        
        <SectionHeader>내일 계획</SectionHeader>
        <PlanInput
          placeholder="내일의 계획을 작성하세요."
          multiline
          value={tomorrowPlan}
          onChangeText={setTomorrowPlan}
        />
         
         <SectionHeader>뇌 건강을 위한 생활습관</SectionHeader>
         
         <Text style={styled.text}>
           인정사정없이 담배를 끊읍시다. 과거 흡연을 했더라도 담배를 끊고 6년 이상 지나면 인지장애의 확률이 2/5로 감소합니다.
         </Text>
         

        <Button onPress={handleSave}>
          <ButtonText>일기 저장</ButtonText>
        </Button>
      </ScrollView>
    </Container>
  );
}

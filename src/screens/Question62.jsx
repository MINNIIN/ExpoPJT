import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import NextButton from '../components/NextButton';
import Timer from '../components/Timer';

export default function App() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState({ hour: "", minute: "", period: "AM" });
  const [selectedWeather, setSelectedWeather] = useState(""); // 선택된 날씨 상태
  const [prohibitedItems] = useState([
    "칼", "가위", "고추장", "부탄가스", "액체 (100ml 초과)", "스프레이 (100ml 초과)",
  ]);

  const navigation = useNavigation();

  const handleNextButtonPress = () => {
    navigation.navigate('Question63')
  };

  // 날씨 옵션
  const weatherOptions = [
    { id: "sunny", label: "맑음", icon: require("../../assets/sgImage/sunny.png") },
    { id: "cloudy", label: "흐림", icon: require("../../assets/sgImage/cloudy.png") },
    { id: "rainy", label: "비", icon: require("../../assets/sgImage/rainy.png") },
    { id: "snowy", label: "눈", icon: require("../../assets/sgImage/snowy.png") },
  ];


  return (
    <View style={styles.container}>

      <View style={styles.topContainer}>
      <Text style={styles.title}>Question 62</Text>
      <Timer/>
      </View>
      

      
      <Text style={styles.header}>오늘의 날짜를 적어 보세요.</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={date}
        onChangeText={(text) => setDate(text)}
      />

      
      <Text style={styles.header}>날씨를 선택하세요.</Text>
      <View style={styles.weatherContainer}>
        {weatherOptions.map((weather) => (
          <TouchableOpacity
            key={weather.id}
            style={[
              styles.weatherOption,
              selectedWeather === weather.id && styles.selectedWeather, 
            ]}
            onPress={() => setSelectedWeather(weather.id)} 
          >
            <Image source={weather.icon} style={styles.weatherIcon} />
            <Text>{weather.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      
      <Text style={styles.header}>현재 시각을 적고, 시간과 분을 입력해 보세요.</Text>
      <View style={styles.timeContainer}>
        <TouchableOpacity
          style={[styles.periodButton, time.period === "AM" && styles.activePeriod]}
          onPress={() => setTime({ ...time, period: "AM" })}
        >
          <Text>오전</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.periodButton, time.period === "PM" && styles.activePeriod]}
          onPress={() => setTime({ ...time, period: "PM" })}
        >
          <Text>오후</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.timeInput}
          placeholder="시"
          keyboardType="numeric"
          value={time.hour}
          onChangeText={(text) => setTime({ ...time, hour: text })}
        />
        <TextInput
          style={styles.timeInput}
          placeholder="분"
          keyboardType="numeric"
          value={time.minute}
          onChangeText={(text) => setTime({ ...time, minute: text })}
        />
      </View>

      
      <Text style={styles.header}>기내반입 금지물품을 기억해 주세요.</Text>
      {prohibitedItems.map((item, index) => (
        <Text key={index} style={styles.prohibitedItem}>
          - {item}
        </Text>
      ))}

      <View style={styles.bottomContainer}>
              {/* NextButton에 다음 화면 이름 전달 */}
                  <NextButton nextScreen="Question63" label="문제 63" onPress={handleNextButtonPress} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    
  },
  header: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  weatherContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  weatherOption: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderWidth: 2,
    borderColor: "transparent", 
    borderRadius: 50,
  },
  selectedWeather: {
    borderColor: "red", 
  },
  weatherIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  timeInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    width: 50,
    marginHorizontal: 5,
    textAlign: "center",
  },
  periodButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "#f9f9f9",
  },
  activePeriod: {
    backgroundColor: "#ddd",
  },
  prohibitedItem: {
    fontSize: 16,
    marginVertical: 2,
  },
});

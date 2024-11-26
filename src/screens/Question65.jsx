import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Question65({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>문제 65번</Text>
        <Button
          title="다음 문제로 이동"
          onPress={() => navigation.navigate('Question65')}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  });
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const NextButtonLink = ({ href, label }) => {
  return (
    <Link href={href}>
      <Pressable style={styles.button}>
        <Text style={styles.text}>{label}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NextButtonLink;

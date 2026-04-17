import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  message?: string;
}

export default function HomePage({ message = 'Welcome to my Expo App!' }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});


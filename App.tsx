import React from 'react';
import { SafeAreaView } from 'react-native';
import HomePage from './src/screens/home-page';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomePage message="Hello fellow programmer!" />
    </SafeAreaView>
  );
}


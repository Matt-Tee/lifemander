import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Section from './components/Section';

export default function App() {
  return (
    <View style={styles.container}>
      <Section number={1} width="100%"/>
      <Section number={2} width="100%"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

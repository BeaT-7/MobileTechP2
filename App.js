import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './komponenti/Logo'
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World from Group 4 : Valts Gustavs Gusmanis!</Text>
      <Text>This is my Valts Gustavs Gusmanis first React Native application!</Text>
      <Logo/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#58FA58',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

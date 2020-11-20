import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World from Group G4 : Helvis Tīcs!</Text>
      <Text>This is my Helvja Tīca first React Native applciation!</Text>
      <Image style = {{width: 150, height: 200}} source={require('./Resources/donald.png')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

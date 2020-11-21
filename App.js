import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View,Image, Button  } from 'react-native';




export default function App() {
  return (
      <React.Fragment>
       <View style={styles.container}>
         <Text style={[styles.setColor, styles.setFontSize]}>Hello World from Group 4!</Text>
         <Text style = {[styles.setColor, styles.setFontSize]}>Member: Edgars Eglītis</Text>
         <Text style = {[styles.setColor, styles.setFontSize]}>This is my Edgars Eglītis</Text>
         <Text style = {[styles.setColor, styles.setFontSize]}>first React Native application!</Text>
         <Text style = {[styles.setColor, styles.setFontSize]}> I hope it`s good enough! </Text>
         <StatusBar style="auto" />

         </View>
         <View style={{flex:1.2, backgroundColor:'#000000', alignItems: 'center' }}>
    <Image
      style={{
        width: 150,
         height: 150,
          borderRadius:75,
          borderColor : '#fff',
          borderWidth: 0.5,
        }}
      source={require('./assets/a.jpeg')}
    />
    <Text style={[styles.setColor, styles.setFontSize, ]}>Edgars Eglītis, IT student</Text>
</View>
  </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#000000',
    alignItems: 'center',
   justifyContent: 'center',
  },
  setColor : {
    color: '#fff',
  },
  setFontSize: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  setColors : {
    color: '#fff',
  }
});

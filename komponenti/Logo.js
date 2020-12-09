import React from 'react'

import { Image, StyleSheet, Text, View } from 'react-native';
import logo from '../assets/bilde.png'
const Logo = () =>{
    return (
      <>
        <View style={styles.container}>
        <Image source ={logo} style={styles.logo}/>
        </View>
        </>
    )
  }

  export default Logo ;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#58FA58',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      width: 200,
      height:200
    }
  })
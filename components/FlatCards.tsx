import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.header}>FlatCards</Text>
      <View style={styles.container} >
        <View style={[styles.card,styles.cardOne]}><Text>Red</Text></View>
        <View style={[styles.card,styles.cardTwo]}><Text>Blue</Text></View>
        <View style={[styles.card,styles.cardThree]}><Text>Green</Text></View>
        <View style={[styles.card,styles.cardFour]}><Text>Yellow</Text></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        marginTop:10,
        width:100,
        marginLeft:8,
        fontSize:20,
    },
    container:{
        backgroundColor:"#000",
       marginHorizontal:5,
       paddingVertical:10,
       borderRadius:10,
       elevation:5,
        flex:1,
        flexDirection:"row"
    },
    card:{
        height:100,
        width:100,
        margin:8,
        borderRadius:10,
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    cardOne:{
        backgroundColor:"red"
    },
    cardTwo:{
        backgroundColor:"blue"
    },
    cardThree:{
        backgroundColor:"green"
    },
    cardFour:{
        backgroundColor:"yellow"
    },
})
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.header}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container} >
        <View style={[styles.card,styles.cardOne]}><Text>Red</Text></View>
        <View style={[styles.card,styles.cardTwo]}><Text>Blue</Text></View>
        <View style={[styles.card,styles.cardThree]}><Text>Green</Text></View>
        <View style={[styles.card,styles.cardFour]}><Text>Yellow</Text></View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        marginTop:10,
        width:"50%",
        marginLeft:8,
        fontSize:20,
    },
    container:{
       backgroundColor:"#000",
       marginHorizontal:5,
       paddingVertical:10,
       borderRadius:10,
       elevation:5
    },
    card:{
        height:100,
        width:100,
        margin:8,
        borderRadius:10,
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        shadowOffset:{
            height:500,
            width:500
        },
        shadowColor:"white",
        elevation:5,
        
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
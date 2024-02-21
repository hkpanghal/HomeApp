import { Button, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {

    function openWebSite(webLink:string){
        Linking.openURL(webLink)
    }
  return (
    <View>
        <Text style={styles.header}>Action Card</Text>
        <View style={styles.container}>
            <Image 
            source={{
                uri:"https://images.unsplash.com/photo-1600693437693-e3eb10df2677?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }}

            style={styles.image}
            />

            <View style={styles.bottom}>
                <View style={styles.btnContainer}>
                    <Button onPress={() => openWebSite("https://unsplash.com/photos/white-ceramic-jars-on-white-table-f1rPr-sKI1s")} title='read more'></Button>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.desc}>
                        <Text>Desc</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
        padding:5,
        margin:10,
        backgroundColor:"#123",
        borderRadius:10,
        elevation:5,
       
    },
    image:{
        height:200,
        objectFit:"cover",
        borderRadius:10,
    },
    bottom:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    btnContainer:{
        marginVertical:20,
        width:100
    },
    desc:{
       width:100,
       backgroundColor:"#000",
       padding:5,
       flex:1,
       alignItems:"center",
       justifyContent:"center",
       borderRadius:2,
       borderStyle:"solid",
       borderWidth:1,
       borderColor:"#333"
    }
   
})
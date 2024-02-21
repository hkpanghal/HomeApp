import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, ViewComponent } from 'react-native'
import React from 'react'

export default function ContactList() {
let contacts = [
    { uid: 101, name: "John Doe", status: "Active", imageUrl: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbiUyMGljb258ZW58MHx8MHx8fDA%3D" },
    { uid: 102, name: "Jane Smith", status: "Away", imageUrl: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbiUyMGljb258ZW58MHx8MHx8fDA%3D" },
    { uid: 103, name: "Alice Johnson", status: "Offline", imageUrl: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbiUyMGljb258ZW58MHx8MHx8fDA%3D" },
    { uid: 104, name: "Bob Brown", status: "Active", imageUrl: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbiUyMGljb258ZW58MHx8MHx8fDA%3D" },
    { uid: 105, name: "Sarah Lee", status: "Away", imageUrl: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbiUyMGljb258ZW58MHx8MHx8fDA%3D" },
    { uid: 106, name: "Mike Wilson", status: "Offline", imageUrl: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbiUyMGljb258ZW58MHx8MHx8fDA%3D" },
    { uid: 107, name: "Emily Davis", status: "Active", imageUrl: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbiUyMGljb258ZW58MHx8MHx8fDA%3D" },
    { uid: 108, name: "Chris Garcia", status: "Away", imageUrl: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbiUyMGljb258ZW58MHx8MHx8fDA%3D" },
    { uid: 109, name: "Linda Martinez", status: "Offline", imageUrl: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbiUyMGljb258ZW58MHx8MHx8fDA%3D" },
    { uid: 110, name: "Alex Rodriguez", status: "Active", imageUrl: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbiUyMGljb258ZW58MHx8MHx8fDA%3D" }
];

  return (
    <SafeAreaView >
      <Text style={styles.header}>ContactList</Text>
     <ScrollView  style={styles.container} alwaysBounceVertical>
        {
            contacts.map(({uid,name,status,imageUrl}) => (
                <View style={styles.user} key={uid} >
                    <Image 
                    source={{
                        uri:imageUrl
                    }}
                    style={styles.userImage}
                     />
                     <View>
                        <Text>{name}</Text>
                        <Text>{status}</Text>
                     </View>
                </View>
            ))
        }
     </ScrollView>
    </SafeAreaView>
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
        backgroundColor:"#123",
        paddingVertical:10,
        margin:10,
        height:500,
        borderRadius:10,
        overflow:"scroll",
        marginBottom:30,
        
        
    },
    user:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"#000",
        margin:5,
        borderRadius:10,
        padding:5,
        elevation:5,
        alignItems:"center",
        gap:20,
      
    },
    userImage:{
        height:60,
        width:60,
        borderRadius:60/2,
    },
})
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyImageCard() {
  return (
    <View>
      <Text style={styles.header}>Trending Places</Text>
      <View style={styles.container}>
        <Image 
        source={{
            uri:"https://images.unsplash.com/photo-1495562569060-2eec283d3391?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWxzJTIwYXJ0cyUyMHBsYWNlfGVufDB8fDB8fHww"
        }}

        style={styles.image}
         />

         <View>
            <Text style={styles.header}>Beautiful Place</Text>
            <Text style={styles.desc} numberOfLines={3}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non aliquid tenetur molestiae quisquam obcaecati earum accusamus deleniti minima asperiores, dolores eligendi dolorum soluta voluptate corporis error maxime reiciendis deserunt est?</Text>
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
        paddingBottom:20,
    },
    image:{
        height:200,
        objectFit:"cover",
        borderRadius:10,
    },
    desc:{
        marginLeft:8,
        color:"grey"
    }
})
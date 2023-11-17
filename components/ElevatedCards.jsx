import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.topText} >ElevatedCards</Text>
      <ScrollView horizontal={true} >
      <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>😀</Text>
        </View>
      </ScrollView>
    </View>
  )
}                                    

const styles = StyleSheet.create({
    card:{
        height:100,
        width:100,
        flex:1,
        backgroundColor:'red',
        padding:15,
        margin: 12,
        borderRadius:16,
        alignItems:"center",
        justifyContent:"center",

    },
    container: {
        flexDirection: 'row',
        margin: 12,
    },
    cardElevated:{
        elevation: 6,
        shadowOffset: {
            width: 1,
            height:1
        },
        shadowColor: '#000000',
        shadowOpacity: 0.,
        shadowRadius: 10
    },
    topText: {
        margin: 12,
        fontSize: 39,
        fontWeight: '900',
        paddingTop: 39,
    },
      
})
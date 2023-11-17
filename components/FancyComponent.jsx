import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyComponent(props) {
    const imageUrl = props.image.url ;
    const title = props.image.title ;
    const label = props.image.label ;
    const description = props.image.description ;
    const footer = props.image.footer ;
  return (
    <View>
      <Text style={styles.topText} >Trending places from FancyComponents</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image style={styles.cardImage}        source={{
            uri:imageUrl //since this is already in the
        }}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardLabel}>{label}</Text>
            <Text style={styles.cardDescription}>{description}</Text>
            <Text style={styles.cardFooter}>{footer}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    topText: {
        margin: 12,
        fontSize: 22,
        fontWeight: '800',
        paddingTop: 39,
      },
      card: {
        width: 350,
        height: 'auto' ,
        borderRadius: 33,
        marginVertical: 12,
        marginHorizontal: 16,
        paddingHorizontal:3,
        paddingTop:3,
        
    },
    cardElevated: {
        backgroundColor: '#F9F9F9',
        elevation: 12,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowRadius: 10
        
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderRadius: 33,
        
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000000',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        color: '#000000',
        fontSize: 17,
        marginBottom: 2,
        marginTop:6

    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 14,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter: {
        color: '#000000',
        marginBottom:20,
        fontSize:12
    }

})



import { 
    StyleSheet, Pressable,
    Text, View, Linking, Image, TouchableOpacity, Alert } from 'react-native'
import React , {useCallback} from 'react'
import { Appbar, Button } from 'react-native-paper';


const handlePress = ((url) => {
  // Checking if the link is supported for links with a custom URL scheme.
  const supported = Linking.canOpenURL(url);
//   Linking.openURL(url);
  if (supported) {
    // Opening the link with some app, if the URL scheme is "http" the web link should be opened
    // by some browser in the mobile
     Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
});
const OpenURLButton = ({ url, children }) => {
  
  };
  

export default function ActionCard() {
    function openWebsite(websiteLink){
        // check if  this is ok
        Linking.openURL(websiteLink)
    }



  return (
    <View>
      <Text style={styles.topText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]} >
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Javascript 21 - ES12
            </Text>
        </View>
        <View style={ styles.cardElevated} >
        <Image
        source={{
            uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
        style={styles.cardImage}
        />
        <View style={[styles.bodyContainer,]} >
            <Text >
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
            </Text>
        </View>
        <View style={styles.footerContainer} >
            <Pressable>
              <Button 
                onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')} 
                mode="elevated"
                compact={true}
                style={styles.socialLinks} >
                  Read More
              </Button>
            </Pressable>

            <Pressable>
              <Button 
              onPress={() => openWebsite('https://www.instagram.com/hiteshchoudharyofficial/')} 
              mode="elevated"
              compact={true}
              style={styles.socialLinks} >
                  Follow me
              </Button>
            </Pressable>
   
        </View>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    topText: {
        margin: 12,
        fontSize: 36,
        fontWeight: '900',
        paddingTop: 19,
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
    
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 19,
        fontWeight: '700'
    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding: 10,
        fontSize:14,
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6,
        elevation: 3,
        shadowOffset: {
            width: 2,
            height: 1
        },
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowRadius: 10
        
        
    }

})



import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.topText}>FlatCards</Text>

      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={[styles.card, styles.redColourCard]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.card, styles.blueColourCard]}>
            <Text>Blue</Text>
          </View>
          <View style={[styles.card, styles.greenColourCard]}>
            <Text>Green</Text>
          </View>
          <View style={[styles.card, styles.redColourCard]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.card, styles.blueColourCard]}>
            <Text>Blue</Text>
          </View>
          <View style={[styles.card, styles.greenColourCard]}>
            <Text>Green</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topText: {
    margin: 12,
    fontSize: 39,
    fontWeight: '900',
    paddingTop: 39,
  },

  container: {
    flexDirection: 'row',
    margin: 12,
  },
  card: {
    width: 100,
    height: 100,
    margin: 8,
    padding: 5,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 28,
  },
  redColourCard: {
    backgroundColor: 'red',
  },
  blueColourCard: {
    backgroundColor: 'blue',
  },
  greenColourCard: {
    backgroundColor: 'green',
  },
});

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyComponent from './components/FancyComponent';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { useColorScheme } from 'react-native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
} from 'react-native-paper';


export default function App() {

  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const paperTheme =
    colorScheme === 'dark'
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };

  return ( 
  <PaperProvider theme={paperTheme} >
    <SafeAreaView  >
      <ScrollView  >
        <FlatCards />
        <ContactList />
        <ElevatedCards />

          <ScrollView horizontal >

            <FancyComponent image={{url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
            title:"Hawa Mahal",
            label: "Pink City, jaipur",
            description:"The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace.",
            footer:"12 mins away"
          }} />
            <FancyComponent image={{url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
            title:"Hawa Mahal",
            label: "Pink City, jaipur",
            description:"The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace.",
            footer:"12 mins away"
          }} />
        </ScrollView>
        
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  </PaperProvider>
  );
}
import React from 'react';
import { Link } from 'expo-router';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import ListProg from "@/components/ListProg";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'PYTHON',
    programmingLanguage: 'Изучаю примерно год. Язык интересен своей универсальностью и простотой. Из мунусов это низкая производительность в ресурсоемких задачах',
    imageLaguage: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/python_vertical_logo_icon_168039.png',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'JavaScript',
    programmingLanguage: 'Начал изучать в Хекслете, но думаю в дальнейшем его испольховать не буду =)',
    imageLaguage: 'https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png',
  },
];

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <ListProg
            langTitle={item.title}
            progLag={item.programmingLanguage}
            imagelag={item.imageLaguage}
          />
        )}
        />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
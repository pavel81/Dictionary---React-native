import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AddWord from './AddWord';
import SearchWord from './SearchWord';

const App = () => {
  const [dictionary, setDictionary] = useState([]);
  let found = '';
  let word = '';
 
  return (
    <View style={styles.layout}>
      <Text> Please add a word. {'\n'}</Text>
      <AddWord onChange ={setDictionary} value = {dictionary} />
      <Text>{'\n'}</Text>
      <SearchWord listOfWords = {dictionary} isFound = {found} isWord = {word} />
    </View>
  )}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignContent: 'center', 
    justifyContent: 'center', 
  }
});

export default App;
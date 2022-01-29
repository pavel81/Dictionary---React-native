import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AddWord from './AddWord';
import SearchWord from './SearchWord';
import Layout from './Layout';

const App = () => {
  const [dictionary, setDictionary] = useState([]);
  const [wordToAdd, setWordToAdd] = useState('');

  const addWordToDictionary = (event) => {
    event.preventDefault();
    if (wordToAdd) {
      setDictionary(dictionary.concat(wordToAdd));
    }
    setWordToAdd('');
  };
  
 
  return (
    <View style={styles.layout}>
      <Text> Please add a word. {'\n'}</Text>
      <Layout 
        onChange = {setWordToAdd}
        value = {wordToAdd}
        onPress = {addWordToDictionary}
        title = 'Add'
      /> 
      <Text>{'\n'}</Text>
      <SearchWord listOfWords = {dictionary} />
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

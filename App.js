import React, {useState} from 'react';
import {TextInput, Button, Text, View, StyleSheet} from 'react-native';

const App = () => {
  const [wordToAdd, setWordToAdd] = useState('');
  const [wordToSearch, setWordToSearch] = useState('');
  const [dictionary, setDictionary] = useState([]);
  const [message, setMessage] = useState('');
  let found = '';

  const addWordToDictionary = ((event) => {
    event.preventDefault();
    if (wordToAdd) {
      setDictionary(dictionary.concat(wordToAdd));
    }
    setWordToAdd('');
  });

  const searchWordInDictionary = ((event) => {
    event.preventDefault();
    found = 'not found';
    for (let words of dictionary) {
      if (words === wordToSearch) {
        found= 'found';
      }
    }
    setMessage(`The word ${wordToSearch} was ${found} in the dictionary.`);
    setWordToSearch('');
  })
    
  return (
    <View style={styles.layout}>
      <Text> Please add a word. {'\n'}</Text>
      <View style = {{flexDirection: 'row'}}>
        <TextInput
          style = {styles.input}
          onChangeText = {setWordToAdd}
          value = {wordToAdd}
        />
        <Button 
          style = {{flex: 1}}
          type ='submit' 
          title ='Add' 
          onPress = {addWordToDictionary} 
        />
      </View>
      <Text>{'\n'}</Text>
      <View style = {{flexDirection: 'row'}}>
        <TextInput
          style = {styles.input}
          onChangeText = {setWordToSearch}
          value={wordToSearch}
        />
        <Button 
          style = {{flex: 1}}
          type ='submit' 
          title ='Search' 
          onPress = {searchWordInDictionary} 
        />
      </View>
      <Text>{message}</Text>
    </View>
  )}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignContent: 'center', 
    justifyContent: 'center', 
  },
  input: {
    flex: 1, 
    borderColor: 'black', 
    borderWidth: 1,
    margin: 5
  }
});

export default App;
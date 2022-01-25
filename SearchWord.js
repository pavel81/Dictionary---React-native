import React, {useState} from 'react';
import {TextInput, Text, Button, View, StyleSheet} from 'react-native';
import DisplayMessage from './displayMessage';
import Layout from './Layout';

const SearchWord = (props) => {
  const [wordToSearch, setWordToSearch] = useState('');
   const [message, setMessage] = useState('');
  let found = '';
  let word = '';

  const searchWordInDictionary = (event) => {
    event.preventDefault();
    word = wordToSearch;
    found = 'not found'
    for (let words of props.listOfWords) {
      if (words === word) {
        found = 'found';
      }
    }
    setWordToSearch('');
    setMessage(`The word ${word} was ${found} in the dictionary.`);
  }
  return (
    <View>
   <Layout 
    onChange = {setWordToSearch}
    value = {wordToSearch}
    onPress = {searchWordInDictionary}
    title ='Search'
    />      
    <Text>{message}</Text>
    </View> 
  );
}

export default SearchWord;
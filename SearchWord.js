import React, {useState} from 'react';
import {View} from 'react-native';
import DisplayMessage from './DisplayMessage';
import Layout from './Layout';

const SearchWord = (props) => {
  const [wordToSearch, setWordToSearch] = useState('');

  const searchWordInDictionary = (event) => {
    event.preventDefault();
    props.isFound = 'not found'
    props.isWord = wordToSearch;
    for (let words of props.listOfWords) {
      if (words === props.isWord) {
        props.isFound = 'found';
      }
    }
    setWordToSearch('');
  }

  return (
    <View>
   <Layout 
    onChange = {setWordToSearch}
    value = {wordToSearch}
    onPress = {searchWordInDictionary}
    title ='Search'
    />    
    <DisplayMessage isWord = {props.isWord} value = {props.isFound} />  
    </View>  
  );
}

export default SearchWord;
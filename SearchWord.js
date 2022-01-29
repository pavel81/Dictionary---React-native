import React, {useState} from 'react';
import {View} from 'react-native';
import DisplayMessage from './DisplayMessage';
import Layout from './Layout';

const SearchWord = (props) => {
  const [wordToSearch, setWordToSearch] = useState('');
  const [found, setFound] = useState('');
  const [word,setWord] = useState('');

  const searchWordInDictionary = (event) => {
    event.preventDefault();
    setFound('not found');
    setWord(wordToSearch);
    for (let words of props.listOfWords) {
      if (words === wordToSearch) {
        setFound('found');
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
    <DisplayMessage isWord = {word} value = {found} />  
    </View>  
  );
}

export default SearchWord;
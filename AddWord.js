import React, {useState} from 'react';
import {View} from 'react-native';
import Layout from './Layout';

const AddWord = (props) => {
  const [wordToAdd, setWordToAdd] = useState('');

  const addWordToDictionary = (event) => {
    event.preventDefault();
    if (wordToAdd) {
      props.onChange([...props.value, ...wordToAdd]);
    }
    setWordToAdd('');
  };
  
return (
  <View>
  <Layout 
    onChange = {setWordToAdd}
    value = {wordToAdd}
    onPress = {addWordToDictionary}
    title = 'Add'
    />  
  </View>
  );
}

export default AddWord;
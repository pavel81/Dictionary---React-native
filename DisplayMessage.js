import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

const DisplayMessage = (props) => {
  const[message, setMessage] = useState('');
  
  useEffect (()=> {
  props.isWord ? setMessage(`The word ${props.isWord} was ${props.value} in the dictionary.`) : setMessage('');}, [props.isWord, props.value]);

  return  <Text>{message}</Text>
}

export default DisplayMessage;
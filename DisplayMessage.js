import React, {useState} from 'react';
import {Text} from 'react-native';

const DisplayMessage = (props) => {
  const [message, setMessage] = useState('');
  
  props.onChange ? setMessage(`The word ${props.onChange} was ${props.isFound} in the dictionary.`) : setMessage('');

  return (
    <Text>{message}</Text>
  );
}

export default DisplayMessage;
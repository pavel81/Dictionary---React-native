import React from 'react';
import {Text} from 'react-native';

const DisplayMessage = (props) => {

    return  <Text>
      {props.isWord ? `The word ${props.isWord} was ${props.value} in the dictionary.` : ''}
      </Text>

}

export default DisplayMessage;
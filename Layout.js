import React from 'react';
import {TextInput, Button, View, StyleSheet} from 'react-native';

const Layout = (props) => {
return(
  <View style = {{flexDirection: 'row'}}>
        <TextInput
          style = {styles.input}
          onChangeText = {props.onChange}
          value = {props.value}
        />
        <Button 
          style = {{flex: 1}}
          type ='submit' 
          title = {props.title}
          onPress = {props.onPress} 
        />
  </View>
);
}

const styles = StyleSheet.create({
  input: {
    flex: 1, 
    borderColor: 'black', 
    borderWidth: 1,
    margin: 5
  }
});

export default Layout;

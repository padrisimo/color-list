import React, { Component } from 'react';
import {  
    View, 
    Text,
    StyleSheet,
    TextInput
 } from 'react-native';

export default class ColorForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.txtInput} />
        <Text style={styles.button}> Add </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'lightgrey',
        paddingTop: 20,
        height: 70,
    },
    txtInput: {
        flex: 1,
        margin: 5,
        padding: 5,
        borderWidth: 2,
        fontSize: 20,
        borderRadius: 5,
        backgroundColor: 'snow'
    },
    button: {
        backgroundColor: 'black',
        margin: 5,
        padding: 5,
        alignItems: 'center',
        color: 'white',
        fontSize: 20
    }
});
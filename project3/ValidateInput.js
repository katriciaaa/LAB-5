// ValidatedInput.js
import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

//Complete the program
const ValidatedInput = ({value, onChangeText, placeholder, validateInput, errorMessage}) => {
  const [isTouched, setIsTouched] = useState(false);
  const isValid = validateInput(value);
  return (
    <View style = {styles.container}>
    <TextInput
      style = {[styles.input, isTouched && !isValid && styles.invalidInput]}
      value = {value}
      onChangeText = {text => {
        setIsTouched(true);
        onChangeText(text);
      }}
      placeholder = {placeholder}
    />
    {isTouched && !isValid && <Text style = {styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 10,
    borderRadius: 5,
  },
  invalidInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default ValidatedInput;

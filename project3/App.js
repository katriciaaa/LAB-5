// App.js
import React, { useState } from 'react';
import { SafeAreaView, Button, StyleSheet, Alert } from 'react-native';
import ValidatedInput from './ValidatedInput';

//Complete the program 
const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  // Validation functions
  const validateName = name => name.length > 0;
  const validateEmail = email => /^\S+@\S+\.\S+$/.test(email);
  const validatePassword = password => password.length >= 8;

  //Write the functions
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if(
      validateName(formData.name) &&
      validateEmail(formData.email) &&
      validatePassword(formData.password)
    ) {
      setMessage('Form submitted successfully!');
    }
    else {
      setMessage('Please complete fields successfully');
    }
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <ValidatedInput
        value={formData.name}
        onChangeText={text => handleInputChange('name', text)}
        placeholder="Name"
        validateInput={validateName}
        errorMessage="Name is required"
      />
      <ValidatedInput
        value={formData.email}
        onChangeText={text => handleInputChange('email', text)}
        placeholder="Email"
        validateInput={validateEmail}
        errorMessage="Invalid email address"
      />
      <ValidatedInput
        value={formData.password}
        onChangeText={text => handleInputChange('password', text)}
        placeholder="Password"
        validateInput={validatePassword}
        errorMessage="Password must be at least 8 characters"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;

// ContactItem.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContactItem = ({ contact, onDelete, onEdit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{contact.name} - {contact.phone}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => onEdit(contact)} style={styles.button}>
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(contact.id)} style={styles.button}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    marginLeft: 10,
    backgroundColor: '#e7e7e7',
    padding: 5,
  }
});

export default ContactItem;

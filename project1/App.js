// App.js
import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, Button, StyleSheet, Alert, TextInput } from 'react-native';
import ContactItem from './ContactItem';

const App = () => {
  const [contacts, setContacts] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [editingContact, setEditingContact] = useState('');

  const handleAddContact = () => {
    if (editingContact) {
      setContacts(contacts.map(contact => {
          if (contact.id === editingContact.id) {
            return { ...contact, name, phone };
          }
          return contact;
        })
      );
      setEditingContact(null);
    } 
    else {
      setContacts([...contacts, { id: Date.now().toString(), name, phone }]);
    }
    setName('');
    setPhone('');
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleEditContact = (contact) => {
    setName(contact.name);
    setPhone(contact.phone);
    setEditingContact(contact);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
        <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" style={styles.input} />
        <Button title={editingContact ? 'Edit' : 'Add'} onPress={handleAddContact} />
      </View>
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ContactItem
            contact={item}
            onDelete={handleDeleteContact}
            onEdit={handleEditContact}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginRight: 10,
    flex: 1,
  },
});

export default App;

// Task.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//Complete the program 
const Task = ({task, toggleComplete, removeTask}) => {
  return (
    <View style = {styles.taskContainer}>
    <TouchableOpacity onPress = {() => toggleComplete(task.id)}>
    <Text style = {[styles.taskText, task.completed && styles.completed]}>{task.text}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => removeTask(task.id)} style={styles.deleteButton}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  taskText: {
    maxWidth: '80%',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'grey',
  },
  deleteButton: {
    backgroundColor: '#ffcccc',
    padding: 8,
    borderRadius: 5,
  },
});

export default Task;

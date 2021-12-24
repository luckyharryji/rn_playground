import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete}>
      <View style={style.listItems}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
};

const style = StyleSheet.create({
  listItems: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
  }
});

export default GoalItem;
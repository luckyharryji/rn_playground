import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Modal} from 'react-native';


const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalHander = (input) => {
    setEnteredGoal(input);
  };

  const addGoalHandler = () => {
    props.onPressHandler(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.modalVisable} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput placeholder="course goal"
          style={styles.textInput}
          onChangeText={goalHander}
          value={enteredGoal} />
        <Button title="add" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput:{
    width: '80%', borderBottomColor: 'black', borderBottomWidth: 1,
    padding: 10
  },
});

export default GoalInput;
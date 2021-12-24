import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import GoalItem from './src/components/GoalItem';
import GoalInput from './src/components/GoalInput';

export default function App() {
  const [curGoalList, setGoalList] = useState([]);
  const [modalVisableState, setModalVisableState] = useState(false);

  const addGoalHander = (enteredGoal) => {
    console.log("current goalList: " + curGoalList);
    setGoalList(curGoalList => [...curGoalList, {key: Math.random().toString(), value: enteredGoal}]);
    setModalVisableState(false);
  };

  const deleteGoalHandler = (id) => {
    setGoalList(curGoalList => {return curGoalList.filter(goal => goal.key != id)});
  };

  return (
    <View style={styles.screen}>
      <GoalInput onPressHandler={addGoalHander} modalVisable={modalVisableState}/>
      <Button title='Add Goals' onPress={() => {setModalVisableState(true)}}/>
      <View>
        {curGoalList.map((goal) => <GoalItem title={goal.value} onDelete={deleteGoalHandler.bind(this, goal.key)}/>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  addButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

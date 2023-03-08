import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    // console.log(enteredGoalText);
    //setCourseGoals([...courseGoals,enteredGoalText]);
    // above add goal to existing list courseGoals depend on previous courseGoals. In react we has better option
    // to do the same task
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }]);
  };

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals=>{
      return currentCourseGoals.filter((goal)=>goal.id!==id);
    });
  };


  return (
    <View style={styles.appContainer}>

      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        {/* scrollview is not suitable for large list because it is not support lazy fetch */}
        {/* for large list we can use FlatList component */}
        {/* <ScrollView>
          {courseGoals.map((goal, index) =>
          (
            <View key={index} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          )
          )}
        </ScrollView> */}

        <FlatList data={courseGoals} renderItem={(itemData) => {
          //itemData.index;
          return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>;
        }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

// we use StyleSheet because
// besides auto-completeion, the stylesheet object also provides validations
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5
  }
});

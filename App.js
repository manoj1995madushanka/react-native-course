import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    //console.log(enteredText);
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    // console.log(enteredGoalText);
    //setCourseGoals([...courseGoals,enteredGoalText]);
    // above add goal to existing list courseGoals depend on previous courseGoals. In react we has better option
    // to do the same task
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {text:enteredGoalText,id:Math.random().toString()}]);
  };


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='your course goal!'
          onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
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

        <FlatList data={courseGoals} renderItem={(itemData)=>{
          //itemData.index;
          return <GoalItem text={itemData.item.text}/>;
          }}
          keyExtractor = {(item,index)=>{
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5
  }
});

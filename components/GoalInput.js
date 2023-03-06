import { StyleSheet, View, Button, TextInput, Text } from "react-native";
import { useState } from 'react';

function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        //console.log(enteredText);
        setEnteredGoalText(enteredText);
    };

    // use to share entered text to app component
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='your course goal!'
                onChangeText={goalInputHandler} 
                value={enteredGoalText}/>
            <Button title='Add Goal' onPress={addGoalHandler} />
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
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
});
import { StyleSheet, View, Button, TextInput, Text, Modal, Image } from "react-native";
import { useState } from 'react';

function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        //console.log(enteredText);
        setEnteredGoalText(enteredText);
    };

    // use to share entered text to app component
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <TextInput style={styles.textInput} placeholder='your course goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title='Add Goal' onPress={addGoalHandler} />
                        </View>
                        <View style={styles.button}>
                            <Button title='Cancel' onPress={props.onCancel} />
                        </View>
                    </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        justifyContent: 'center',
        alignItems: 'center',
       // marginBottom: 24,
        padding:16,
       // borderBottomWidth: 1,
       // borderBottomColor: '#cccccc',
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderColor: '#cccccc',
        borderWidth: 1,
        width: '100%',
        padding: 8,
    },
    buttonContainer:{
        marginTop:16,
        flexDirection:'row'
    },
    button:{
        width:100,
        marginHorizontal:8
    },
    image:{
        width:100,
        height:100,
        margin:20
    },
});
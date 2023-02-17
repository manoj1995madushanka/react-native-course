import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.flexDirection}>
        <TextInput style={styles.textInput} placeholder='your course goal!'/>
        <Button title='Add Goal'/>
      </View>
    <View>
      <Text>List of goals..</Text>
    </View>
    </View>
  );
} 

// we use StyleSheet because
// besides auto-completeion, the stylesheet object also provides validations
const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    width: '80%',
    marginRight: 8,
    padding:8,
  }
});

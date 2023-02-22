import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='your course goal!'/>
        <Button title='Add Goal'/>
      </View>
    <View style={styles.goalsContainer}>
      <Text>List of goals..</Text>
    </View>
    </View>
  );
} 

// we use StyleSheet because
// besides auto-completeion, the stylesheet object also provides validations
const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc',
  },
  textInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    width: '70%',
    marginRight: 8,
    padding:8,
  },
  goalsContainer: {
    flex: 5
  }
});

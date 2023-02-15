import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View>
        {/*  padding for inside space */}
        <Text style={styles.dummyText}>Hello World</Text>
      </View>
      <Button title='tap me'/>
    </View>
  );
} 

// we use StyleSheet because
// besides auto-completeion, the stylesheet object also provides validations
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin:16,
    padding:16,
    borderWidth: 2,
    borderColor: 'red',
  }
});

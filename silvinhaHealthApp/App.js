import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Tittle from './src/components/Tittle';
import Form from './src/components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Tittle />
      <Form />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
});

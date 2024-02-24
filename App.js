import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Props from './src/ex_2';

export default function App() {
  return (
    <View style={styles.container}>
      <Props mensagem={'Teste'} />
      <Props nome={'Ewerton'} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

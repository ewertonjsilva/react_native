import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import Props from './src/ex_2'; 
// import Atividade_1 from './src/atividade_1'; 
import Exemplo_3 from './src/ex_3';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Props mensagem={'Sistem react-native'} /> */}
      <Exemplo_3 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 18, 
  },
});

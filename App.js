import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import Props from './src/ex_2'; 
// import Atividade_1 from './src/atividade_1'; 
// import Exemplo_3 from './src/ex_3';
// import Atividade_3 from './src/atividade_3'; 
// import Exemplo4 from './src/ex_4';
// import Atividade4 from './src/atividade_4';
import Exemplo5 from './src/ex_5';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Props mensagem={'Sistem react-native'} /> */}
      <Exemplo5 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c51162',
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 18, 
  },
});

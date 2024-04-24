import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import Props from './src/ex_2'; 
// import Atividade_1 from './src/atividade_1'; 
// import Exemplo_3 from './src/ex_3';
// import Atividade_3 from './src/atividade_3'; 
// import Exemplo4 from './src/ex_4';
// import Atividade4 from './src/atividade_4';
// import Exemplo5 from './src/ex_5'; 
// import Atividade_5 from './src/atividade_5'; 

// import Exemplo_6 from './src/ex_6';
import Atividade_6 from './src/atividade_6'; 
import Exemplo7 from './src/ex_7';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Props mensagem={'Sistem react-native'} /> */}
      <Exemplo7 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 18, 
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'; 
import 'react-native-gesture-handler';

import Navegacao from './src/rotas/drawerNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Props mensagem={'Sistem react-native'} /> */}
      <Navegacao />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03a9f4',
    // alignItems: 'center',
    // justifyContent: 'center', 
    padding: 8, 
  },
});


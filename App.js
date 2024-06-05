import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Navegacao from './src/rotas/stackNavigation';

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


import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center', 
      backgroundColor: '#FF80AB',
      padding: 8, 
      width: '100%', 
      borderRadius: 20, 
    },
    titulo: {
      margin: 6,
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center', 
      color: '#C51162', 
    },
    txtSaida: {
      margin: 6, 
      fontSize: 22, 
      fontWeight: 'bold', 
      textAlign: 'center', 
      color: '#E91E63',     
    }, 
    txtEntrada: {
      borderWidth: 4, 
      textAlign: 'center', 
      fontSize: 22, 
      borderColor: '#E91E63', 
      // height: 50, 
      color: '#E53935', 
      borderRadius: 10, 
      marginTop: 10, 
      padding: 10
    }, 
    button: {
      backgroundColor: '#E91E63', 
      height: 40, 
      justifyContent: 'center', 
      borderRadius: 10, 
      marginTop: 20, 
    }, 
    buttonTouch: {
        backgroundColor: '#C51162', 
    }, 
    textButton: {
      fontSize: 22, 
      color: '#FF80AB', 
      textAlign: 'center', 
    }, 
    textLabel: {
      fontSize: 16, 
      fontWeight: 'bold', 
      color: '#C51162',     
    }, 
  });
  
  export default styles;
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#ffcdd2', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%', 
        borderRadius: 20, 
    }, 
    titulo: {
        fontSize: 30, 
        fontWeight: 'bold', 
        color: '#b71c1c', 
    }, 
    txtSaida: {
        margin: 20, 
        fontSize: 25, 
        color: '#e53935', 
    }, 
    txtEntrada: {
        borderWidth: 3, 
        textAlign: 'center', 
        fontSize: 22, 
        borderColor: '#b71c1c', 
        height: 40, 
        width: '70%', 
        color: '#e53935', 
        borderRadius: 10, 
    }, 
    botao: {
        width: '70%', 
        padding: 16, 
        backgroundColor: '#b71c1c', 
        alignItems: 'center', 
        margin: 18, 
        borderRadius: 20, 
    }, 
    txtBotao: {
        color: '#f5f5f5', 
        fontSize: 20,         
    },
}); 

export default styles;
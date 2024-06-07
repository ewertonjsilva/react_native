import { StyleSheet } from 'react-native';  

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        margin: 10, 
        justifyContent: 'center', 
    }, 
    titulo: {
        fontSize: 25, 
        fontWeight: 'bold', 
        marginVertical: 10, 
        width: '100%', 
        textAlign: 'center', 
    }, 
    botao: {
        width: '100%', 
        padding: 10, 
        borderWidth: 2, 
        marginVertical: 5, 
        borderRadius: 20, 
    }, 
    botaoPress: {
        color: '#fff', 
    }, 
    txtBotao: {
        fontSize: 20, 
    }
});

export default styles;
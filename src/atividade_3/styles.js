import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#f5f5f5', 
        width: '100%', 
        alignItems: 'center', 
        padding: 8, 
        borderRadius: 20, 
    },  
    titulo: {
        fontSize: 30, 
        fontWeight: 'bold', 
        margin: 8, 
        marginBottom: 20,
    }, 
    botao: {
        width: '30%', 
        padding: 16, 
        alignItems: 'center', 
        // margin: 18, 
        borderRadius: 20, 
        backgroundColor: '#000', 
    }, 
    botaoPress: {
        backgroundColor: '#ccc', 
    }, 
    txtBotao: {
        color: '#f5f5f5', 
        fontSize: 20,         
    },
    txtBotaoPress: {
        color: '#000',       
    }, 
    botaoZerar: {
        width: '70%',
    },  
    containerHorizontal: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginTop: 50, 
        marginBottom: 20, 
        width: '70%', 
    }
});

export default styles;
import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', // aq
        // paddingTop: 10, Constants
        backgroundColor: '#eee', 
        width: '100%', // aq
    }, 
    buttons: {
        flexDirection: 'row', 
        flexWrap: 'wrap', 
    }, 
}); 
export default styles;
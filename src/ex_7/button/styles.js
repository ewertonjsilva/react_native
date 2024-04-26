import { Dimensions, StyleSheet } from 'react-native'; 
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    button: {
        fontSize: RFPercentage(5), 
        height: (Dimensions.get('window').width / 4) - 4, 
        width: (Dimensions.get('window').width / 4) - 4, 
        padding: 20, 
        backgroundColor: '#f0f0f0', 
        textAlign: 'center', 
        borderWidth: 1, 
        borderColor: '#888', 
    }, 
}); 
export default styles;
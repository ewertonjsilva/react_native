import { Dimensions, StyleSheet } from 'react-native'; 
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    display: {
        flex: 1, 
        padding: 20, 
        justifyContent: 'center', 
        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
        alignItems: 'flex-end', 
        width: '100%', 
    }, 
    displayValue: {
        fontSize: RFPercentage(8), 
        color: '#fff', 
    }, 
}); 
export default styles;
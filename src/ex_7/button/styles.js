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
    operationButton: {
        color: '#FFF',
        backgroundColor: '#FA8231',
    },
    buttonDouble: {
        width: ((Dimensions.get('window').width / 4) - 4.1) * 2,
    },
    buttonTriple: {
        width: ((Dimensions.get('window').width / 4) - 4.1) * 3,
    },
});
export default styles;
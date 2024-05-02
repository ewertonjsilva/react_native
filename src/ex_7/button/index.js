import { Text, Pressable } from 'react-native'; 
import styles from './styles';

export default function Button(props) {

    const stylesButton = [styles.button];

    if (props.double) stylesButton.push(styles.buttonDouble);
    if (props.triple) stylesButton.push(styles.buttonTriple);  
    if (props.operation) stylesButton.push(styles.operationButton); 

    return(
        <Pressable onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </Pressable>
    );
}

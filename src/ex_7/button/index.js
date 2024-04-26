import { Text, Pressable } from 'react-native'; 
import styles from './styles';

export default function Button(props) {
    return(
        <Pressable onPress={props.onClick}>
            <Text style={styles.button}>{props.label}</Text>
        </Pressable>
    );
}

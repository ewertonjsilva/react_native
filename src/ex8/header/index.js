import { View, Text } from 'react-native'; 

import styles from './styles';

export default function Header ({ titulo }) { 
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>{titulo}</Text>
        </View>
    );
}

Header.defaultProps = {
    titulo : 'Lista de compras', 
}
import { View, Text } from 'react-native';  

import styles from './styles';

import Mensagem from './mensagem';

export default function Exemplo2 ({mensagem}) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 2</Text>

            <Mensagem />
        </View>
    );
}

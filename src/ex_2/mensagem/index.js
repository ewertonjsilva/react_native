import { Text } from 'react-native';

import styles from './styles';

export default function Mensagem({ nome = '' }) {
    return (
        <Text style={styles.texto}>{`Nome: ${nome}`}</Text>
    );
}

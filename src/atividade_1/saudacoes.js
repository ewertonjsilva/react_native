import { Text } from 'react-native';

import styles from './stylesSaudacoes';

export default function Saudacoes ({children}) {
    return (
        <Text style={styles.texto}>
            Olá {children}
        </Text>
    )
}
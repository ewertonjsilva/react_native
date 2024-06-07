import { View, Text } from 'react-native'; 

import styles from './styles';

export default function () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Sobre</Text>
            <Text style={styles.texto}>
                Programa desenvolvido na aula de 
                Programação Mobile I do curso 
                de Desenvolvimento de Sistemas
            </Text>
        </View>
    );
}
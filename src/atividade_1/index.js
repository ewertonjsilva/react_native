import { View, Text, Image } from 'react-native'; 

import Saudacoes from './saudacoes';

import logo from '../../assets/002-1-react-native.png';
import styles from './styles';

export default function Atividade_1 () {
    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.imagem} /> 
            <Text style={styles.titulo}>Exemplo 2 / Atividade 1</Text>

            <Saudacoes>Mário</Saudacoes>
            <Saudacoes>Maria</Saudacoes>
            <Saudacoes>Bruno</Saudacoes>
            <Saudacoes>Bruna</Saudacoes>

        </View>
    );
}
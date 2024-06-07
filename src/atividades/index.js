import { View, Text, Pressable } from 'react-native'; 

import styles from './styles';

export default function Atividades({ navigation }) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividades</Text> 

            <Pressable onPress={() => navigation.navigate('Atv2')} style={styles.botao}>
                <Text style={styles.txtBotao}>Atividade 2</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Atv3')} style={styles.botao}>
                <Text style={styles.txtBotao}>Atividade 3</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Atv4')} style={styles.botao}>
                <Text style={styles.txtBotao}>Atividade 4</Text>
            </Pressable>
        </View>
    );
}
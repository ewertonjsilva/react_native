import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';

export default function Exemplo_3 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>

            <Pressable 
                style={styles.botao} 
                onPress={() => alert('Ewerton')}
            >
                <Text style={styles.txtBotao}>Botão</Text>
            </Pressable>
        </View>
    );
}


import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';

export default function Atividade_3() {

    const [numero, setNumero] = useState(0);

    function incremento() {
        const inc = numero + 1;
        setNumero(inc);
    }

    function decremento() {
        const dec = numero - 1;
        setNumero(dec);
    }

    function zerar() {
        setNumero(0);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 3</Text>

            <View style={styles.containerHorizontal}>
                <Pressable
                    style={({ pressed }) => pressed ? [styles.botao, styles.botaoPress] : styles.botao}
                    onPress={() => decremento()}
                >
                    <Text style={styles.txtBotao}>
                        -
                    </Text>
                </Pressable >

                <Text style={styles.titulo}>{numero}</Text>

                <Pressable
                    style={({ pressed }) => pressed ? [styles.botao, styles.botaoPress] : styles.botao}
                    onPress={() => incremento()}
                >
                    <Text style={styles.txtBotao}>
                        +
                    </Text>
                </Pressable >
            </View>

            <Pressable
                style={({ pressed }) => pressed ? [styles.botao, styles.botaoZerar, styles.botaoPress] : [styles.botao, styles.botaoZerar]}
                onPress={() => zerar()}
            >
                <Text style={styles.txtBotao}>
                    Zerar
                </Text>
            </Pressable >
        </View>
    );
}

/*
Alternativa para animar a cor do Text 
{
    ({ pressed }) => (
        <Text 
            style={pressed ? [styles.txtBotao, styles.txtBotaoPress] : styles.txtBotao}
        >
            + 1
        </Text>
    )
}
*/
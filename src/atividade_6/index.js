import { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';

import styles from './styles';

export default function Atividade_6 () {

    const [massa, setMassa] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);

    const [isFocusMss, setIsFocusMss] = useState(false);
    const [isFocusAlt, setIsFocusAlt] = useState(false);

    function Calcular() {
        const valor = massa / (altura * altura);
        setResultado(valor);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Exemplo 6 </Text>
            <View style={styles.entradaImc}>
                <TextInput
                    placeholder='Massa'
                    placeholderTextColor='lightgray'
                    keyboardType='numeric'
                    style={[
                        styles.input,
                        isFocusMss
                            ? {
                                outline: 'none', 
                                borderWidth: 3, 
                                borderColor: '#aaa',                                
                            }
                            : {}
                    ]}
                    onChangeText={(entrada) => setMassa(entrada)}
                    onFocus={() => setIsFocusMss(true)}
                    onBlur={() => setIsFocusMss(false)}
                />
                <TextInput
                    placeholder='Altura'
                    placeholderTextColor='lightgray'
                    keyboardType='numeric'
                    style={[
                        styles.input,
                        isFocusAlt
                            ? {
                                outline: 'none', 
                                borderWidth: 3, 
                                borderColor: '#aaa',                                
                            }
                            : {}
                    ]}
                    onChangeText={(entrada) => setAltura(entrada)}
                    onFocus={() => setIsFocusAlt(true)}
                    onBlur={() => setIsFocusAlt(false)}
                />
            </View>
            <Pressable
                style={({ pressed }) => pressed
                    ? [styles.button, { backgroundColor: '#eee' }]
                    : styles.button}
                onPress={() => Calcular()}
            >
                <Text style={styles.buttonText}> Calcular </Text>
            </Pressable>
            <Text style={styles.resultados}>{resultado.toFixed(2)}</Text>
        </View>

    );
}
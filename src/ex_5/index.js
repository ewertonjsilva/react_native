import { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';

import styles from './styles';

export default function Exemplo5() { 

    const [isFocusN1, setIsFocusN1] = useState(false);
    const [isFocusN2, setIsFocusN2] = useState(false);
    const [isFocusTotal, setIsFocusTotal] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Exemplo 5 </Text>

            <Text style={styles.txtSaida}> Calculadora básica </Text>

            <Text style={styles.textLabel}> 1º número </Text>
            <TextInput
                style={
                    [
                        styles.txtEntrada, 
                            isFocusN1 ? 
                                {
                                    borderColor: '#C51162',                                     
                                    outline: 'none', 
                                } 
                            : 
                                {}
                    ]
                }
                onFocus={() => setIsFocusN1(true)}
                onBlur={() => setIsFocusN1(false)} 
                onChangeText={() => {}}
                // value={n1.toString()}
                // keyboardType='numeric'

            />

            <Text style={styles.txtSaida}> + </Text>

            <Text style={styles.textLabel}> 2º número </Text>
            <TextInput
                style={
                    [
                        styles.txtEntrada, 
                            isFocusN2 ? 
                                {
                                    borderColor: '#C51162',                                     
                                    outline: 'none', 
                                } 
                            : 
                                {}
                    ]
                }
                onFocus={() => setIsFocusN2(true)}
                onBlur={() => setIsFocusN2(false)} 
                onChangeText={() => {}}
                // value={n2.toString()}
            />

            <Text style={[styles.txtSaida, { margin: 0 }]}> = </Text>

            <Text style={styles.textLabel}> Total </Text>
            <TextInput
                style={
                    [
                        styles.txtEntrada, 
                            isFocusTotal ? 
                                {
                                    borderColor: '#C51162',                                     
                                    outline: 'none', 
                                } 
                            : 
                                {}
                    ]
                }
                onFocus={() => setIsFocusTotal(true)}
                onBlur={() => setIsFocusTotal(false)} 
                editable={false}
                // value={total.toString()}
            />

            <Pressable
                onPress={() => {}}
                style={
                    ({pressed}) => pressed ? 
                        [styles.button, styles.buttonTouch] 
                    : 
                        styles.button
                }
            >
                <Text style={styles.textButton}> + </Text>
            </Pressable>

        </View>
    );
}
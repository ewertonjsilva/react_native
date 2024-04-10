import { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';

import styles from './styles';

import Botao from './botao';

export default function Exemplo5() {

    const [isFocusN1, setIsFocusN1] = useState(false);
    const [isFocusN2, setIsFocusN2] = useState(false);
    const [isFocusTotal, setIsFocusTotal] = useState(false);
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState('');

    function soma() {
        setTotal(parseFloat(n1) + parseFloat(n2));
    }

    function subtrai() {
        setTotal(parseFloat(n1) - parseFloat(n2));
    }

    function multiplica() {
        setTotal(parseFloat(n1) * parseFloat(n2));
    }

    function divide() {
        setTotal(parseFloat(n1) / parseFloat(n2));
    }

    function limpa() {
        setN1(0);
        setN2(0);
        setTotal('');
    } 

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
                onChangeText={(num1) => setN1(num1)}
                value={n1}
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
                onChangeText={(num2) => setN2(num2)}
                value={n2}
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
                value={total}
            />

            <View style={styles.botoes}>                
                <Botao sinal={'+'} operacao={soma} />
                <Botao sinal={'-'} operacao={subtrai} />
                <Botao sinal={'x'} operacao={multiplica} />
                <Botao sinal={'/'} operacao={divide} />
            </View>
            
            <Botao sinal={'Limpar'} operacao={limpa} />

        </View>
    );
}
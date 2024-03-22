import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native'; 

import styles from './styles';

export default function Exemplo4 () { 

    const [isFocus, setIsFocus] = useState(false); 

    function focusHandler () {
        setIsFocus(true);
    } 

    function blurHandler () {
        setIsFocus(false);
    } 

    const [mensagem, setMensagem] = useState('Sua mensagem aqui!'); 
    const [mens2, setMens2] = useState('Outra mensagem'); 
    const [mensTela, setMensTela] = useState('');

    function atualizaMensagemHandler() {
        setMensTela(mens2); 
        setMens2('');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text> 

            <Text style={styles.txtSaida}>{mensagem}</Text>

            <TextInput 
                style={isFocus ? {borderWidth: 3, borderColor: '#0f0'} : {borderWidth: 3, borderColor: '#00f'}} 
                placeholder='Digite o texto aqui...' 
                onChangeText={(txt) => setMensagem(txt)} 
                onFocus={() => focusHandler()} 
                onBlur={() => blurHandler()}                 
            />

            <Text style={styles.txtSaida}>{mensTela}</Text> 
            <TextInput 
                style={styles.txtEntrada} 
                // placeholder='Outro texto' 
                onChangeText={(entrada) => setMens2(entrada)} 
                value={mens2}
            />
            <Pressable onPress={() => atualizaMensagemHandler()}>
                <Text>Exibir mensagem</Text>
            </Pressable>
        </View>
    );
}
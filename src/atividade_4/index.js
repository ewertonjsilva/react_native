import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import styles from './styles';

export default function Atividade4() {

    const [nomeCompleto, setNomeCompleto] = useState('');    
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [isFocusNm, setIsFocusNm] = useState(false);
    const [isFocusSbnm, setIsFocusSbnm] = useState(false); 

    function juntaNome() {
        setNomeCompleto(`${nome} ${sobrenome}`);
        // setNomeCompleto(nome + ' ' + sobrenome);
        // apagar o conteúdo de nome e sobrenome
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>

            <Text style={styles.txtSaida}>{nomeCompleto}</Text>

            <TextInput
                style={
                    [
                        styles.txtEntrada, 
                            isFocusNm ? 
                                {
                                    backgroundColor: '#b71c1c', 
                                    color: '#ffcdd2',  
                                    outline: 'none', 
                                } 
                            : 
                                {}
                    ]
                }
                placeholder='Digite seu nome'
                onChangeText={(nm) => setNome(nm)}
                onFocus={() => setIsFocusNm(true)}
                onBlur={() => setIsFocusNm(false)} 
            />

            <TextInput
                style={
                    [
                        styles.txtEntrada, 
                            isFocusSbnm ? 
                                {
                                    borderColor: '#e53935',                               
                                    outline: 'none', 
                                } 
                            : 
                                {}
                    ]
                }
                placeholder='Sigite seu sobrenome' 
                onChangeText={(sbnm) => setSobrenome(sbnm)}
                onFocus={() => setIsFocusSbnm(true)}
                onBlur={() => setIsFocusSbnm(false)} 
            />

            <Pressable
                onPress={() => juntaNome()}
                style={
                    ({pressed}) => pressed ? 
                        [styles.botao, styles.botaoTouch] 
                    : 
                        styles.botao
                }
            >
                <Text style={styles.txtBotao}>Exibir mensagem</Text>
            </Pressable>
        </View>
    );
}
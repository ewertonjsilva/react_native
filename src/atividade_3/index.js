import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Atividade_3 () {

    const [numero, setNumero] = useState(0);

    function Ola (nome) {
        alert(`Olá ${nome}`);
    }   
    
    function incremento() {        
        const inc = numero + 1;
        setNumero(inc);
        // console.log(numero);
    }

    function decremento() {        
        const dec = numero - 1;
        setNumero(dec);
        // console.log(numero);
    }

    function zerar() {                
        setNumero(0);
        // console.log(numero);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 3</Text>

            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => Ola('Ewerton')}
            >
                <Text style={styles.txtBotao}>Botão</Text>
            </TouchableOpacity>

            <Text style={styles.titulo}>Valor: {numero}</Text>

            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => incremento()}
            >
                <Text style={styles.txtBotao}>+ 1</Text>
            </TouchableOpacity>
        </View>
    );
}
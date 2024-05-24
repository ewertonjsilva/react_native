import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native'; 
import FontAwesome from '@expo/vector-icons/FontAwesome';

import styles from './styles';

export default function AddItem({adicionar}) { 

    const [novoItem, setNovoItem] = useState('');

    return(
        <View>
            <TextInput 
                placeholder='Adicionar item...' 
                style={styles.input} 
                value={novoItem} 
                onChangeText={(valorDigitado) => setNovoItem(valorDigitado)}
            />
            <Pressable 
                onPress={() => adicionar(novoItem)}
                style={({pressed}) => pressed ? 
                    [styles.botao, styles.btnPress]
                : 
                    styles.botao                
                }
            >
                <Text style={styles.txtBotao}>
                    <FontAwesome name='plus' size={20} style={styles.icone} />
                    Adicionar
                </Text>
            </Pressable>
        </View>
    );
}
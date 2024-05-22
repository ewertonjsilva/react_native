import { View, Text, TextInput, Pressable } from 'react-native'; 
import FontAwesome from '@expo/vector-icons/FontAwesome';

import styles from './styles';

export default function AddItem() {
    return(
        <View>
            <TextInput 
                placeholder='Adicionar item...' 
                style={styles.input}
            />
            <Pressable 
                style={({pressed}) => pressed ? 
                    [styles.botao, styles.btnPress]
                : 
                    styles.botao                
                }
            >
                <Text style={styles.txtBotao}>
                    <FontAwesome name='plus' size={20} />
                    Adicionar
                </Text>
            </Pressable>
        </View>
    );
}
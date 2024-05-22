import { Pressable, Text } from 'react-native'; 
import FontAwesome from '@expo/vector-icons/FontAwesome';

import styles from './styles';

export default function ItemLista ({dados, deleteItem}) {
    return(
        <Pressable 
            style={
                ({pressed}) => pressed ? 
                    [styles.botao, styles.btnPress] 
                : 
                    styles.botao
            }
        >
            <Text style={styles.txtNome}>{dados.nome}</Text> 
            <FontAwesome 
                name='remove' 
                size={20} 
                color={'firebrick'} 
                onPress={() => deleteItem(dados.id)}
            />
        </Pressable>
    )
}
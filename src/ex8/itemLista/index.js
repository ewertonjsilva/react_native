import { Pressable, Text } from 'react-native'; 

export default function ItemLista ({objeto}) {
    return(
        <Pressable>
            <Text>{objeto.item}</Text>
        </Pressable>
    )
}
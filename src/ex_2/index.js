import { View, Text } from 'react-native';  

import styles from './styles';

export default function Props ({mensagem}) {
    return(
        <View>
            <Text>Mensagem: {mensagem}</Text>
        </View>
    );
}

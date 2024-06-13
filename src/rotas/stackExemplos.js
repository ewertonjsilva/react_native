import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Exemplos from '../exemplos';
import Exemplo2 from '../ex_2';
import Exemplo3 from '../ex_3';
import Exemplo4 from '../ex_4';
import Exemplo5 from '../ex_5';
import Exemplo6 from '../ex_6';
import Exemplo7 from '../ex_7';
import Exemplo8 from '../ex8'; 

const Stack = createNativeStackNavigator();

export default function NavegacaoExemplo() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Home">
                    {(props) => <HomeScreen {...props} extraData={someData} />}
                </Stack.Screen> */}
            <Stack.Screen name="Ex0" component={Exemplos} options={{ title: 'EXEMPLOS' }} />
            <Stack.Screen name="Ex2" component={Exemplo2} options={{ title: 'EXEMPLO 2' }} />
            <Stack.Screen name="Ex3" component={Exemplo3} options={{ title: 'EXEMPLO 3' }} />
            <Stack.Screen name="Ex4" component={Exemplo4} options={{ title: 'EXEMPLO 4' }} />
            <Stack.Screen name="Ex5" component={Exemplo5} options={{ title: 'EXEMPLO 5' }} />
            <Stack.Screen name="Ex6" component={Exemplo6} options={{ title: 'EXEMPLO 6' }} />
            <Stack.Screen name="Ex7" component={Exemplo7} options={{ title: 'EXEMPLO 7' }} />
            <Stack.Screen name="Ex8" component={Exemplo8} options={{ title: 'EXEMPLO 8' }} />
            
        </Stack.Navigator>
    );
}
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Exemplos from '../exemplos';
import Exemplo2 from '../ex_2';
import Exemplo3 from '../ex_3';
import Exemplo4 from '../ex_4';
import Exemplo5 from '../ex_5';
import Exemplo6 from '../ex_6';
import Exemplo7 from '../ex_7';
import Exemplo8 from '../ex8'; 

import Atividade2 from '../atividade_1'; 
import Atividade3 from '../atividade_3'; 
import Atividade4 from '../atividade_4'; 
import Atividade5 from '../atividade_5';
import Atividade6 from '../atividade_6';


const Stack = createNativeStackNavigator();

export default function Navegacao() {
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
            
            <Stack.Screen name="Atv2" component={Atividade2} options={{ title: 'ATIVIDADE 2' }} />
            <Stack.Screen name="Atv3" component={Atividade3} options={{ title: 'ATIVIDADE 3' }} />
            <Stack.Screen name="Atv4" component={Atividade4} options={{ title: 'ATIVIDADE 4' }} />
            <Stack.Screen name="Atv5" component={Atividade5} options={{ title: 'ATIVIDADE 5' }} />
            <Stack.Screen name="Atv6" component={Atividade6} options={{ title: 'ATIVIDADE 6' }} />
            
        </Stack.Navigator>
    );
}
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Atividades from '../atividades';
import Atividade2 from '../atividade_1'; 
import Atividade3 from '../atividade_3'; 
import Atividade4 from '../atividade_4'; 
import Atividade5 from '../atividade_5';
import Atividade6 from '../atividade_6';


const Stack = createNativeStackNavigator();

export default function NavegacaoAtividade() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Home">
                    {(props) => <HomeScreen {...props} extraData={someData} />}
                </Stack.Screen> */}  
            <Stack.Screen name="Atv0" component={Atividades} options={{ title: 'ATIVIDADES' }} />
            <Stack.Screen name="Atv2" component={Atividade2} options={{ title: 'ATIVIDADE 2' }} />
            <Stack.Screen name="Atv3" component={Atividade3} options={{ title: 'ATIVIDADE 3' }} />
            <Stack.Screen name="Atv4" component={Atividade4} options={{ title: 'ATIVIDADE 4' }} />
            <Stack.Screen name="Atv5" component={Atividade5} options={{ title: 'ATIVIDADE 5' }} />
            <Stack.Screen name="Atv6" component={Atividade6} options={{ title: 'ATIVIDADE 6' }} />
            
        </Stack.Navigator>
    );
}
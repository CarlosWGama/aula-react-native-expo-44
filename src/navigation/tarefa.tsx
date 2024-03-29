import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Tarefa } from '../model/tarefa';
import { HomeScreen } from '../screens/home';
import { TarefaScreen } from '../screens/tarefa';

export type TarefaNavegacaoParams = {
    home: undefined,
    tarefa: {tarefa?: Tarefa},
    login: undefined
}

const Stack = createNativeStackNavigator<TarefaNavegacaoParams>();

export const NavegacaoTarefa = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="tarefa" component={TarefaScreen} />
    </Stack.Navigator>
)

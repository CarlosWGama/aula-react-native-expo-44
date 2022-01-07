import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home';
import { LoginScreen } from '../screens/login';
import { TarefaNavegacao } from './tarefa';


export type NavegacaoPrincipalParams = {
    login: undefined,
    app: undefined
}

const Stack = createNativeStackNavigator<NavegacaoPrincipalParams>();


export const NavegacaoPrincipal = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="login" component={LoginScreen}/>
            <Stack.Screen name="app" component={TarefaNavegacao} />
        </Stack.Navigator>
    </NavigationContainer>
)


// declare global {
//     namespace ReactNavigation {
//       interface RootParamList {
//         Home: undefined;
//         Profile: { userId: string };
//         NotFound: undefined;
//       }
//     }
//   }
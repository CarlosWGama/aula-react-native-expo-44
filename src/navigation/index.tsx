import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InicialScreen } from '../screens/inicial';
import { LoginScreen } from '../screens/login';
import { NavegacaoDrawer } from './drawer-menu';

export type NavegacaoPrincipalParams = {
    inicial: undefined,
    login: undefined,
    app: undefined
}

const Stack = createNativeStackNavigator<NavegacaoPrincipalParams>();

export const NavegacaoPrincipal = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="inicial" component={InicialScreen}/>
            <Stack.Screen name="login" component={LoginScreen}/>
            <Stack.Screen name="app" component={NavegacaoDrawer} />
        </Stack.Navigator>
    </NavigationContainer>
)
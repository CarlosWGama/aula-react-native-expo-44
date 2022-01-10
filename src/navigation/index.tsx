import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/login';
import { NavegacaoDrawer } from './drawer-menu';

export type NavegacaoPrincipalParams = {
    login: undefined,
    app: undefined
}

const Stack = createNativeStackNavigator<NavegacaoPrincipalParams>();

export const NavegacaoPrincipal = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="app" component={NavegacaoDrawer} />
            <Stack.Screen name="login" component={LoginScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
)
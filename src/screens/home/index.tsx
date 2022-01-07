import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DrawerActions, RouteProp, useNavigation } from '@react-navigation/native';
import { TarefaNavegacaoParams } from '../../navigation/tarefa';

export interface HomeScreenProps {
    route: RouteProp<TarefaNavegacaoParams, "home">
}

export function HomeScreen (props: HomeScreenProps) {

    //Constantes
    type navProp = NativeStackNavigationProp<TarefaNavegacaoParams, 'home'>;
    const nav = useNavigation<navProp>();

    ///Renderizando
    return (
      <View>
         <Text>HomeScreen</Text>
         <Button title="Abrir Drawer Menu" onPress={() => nav.dispatch(DrawerActions.openDrawer())} />
         <Button title="Sair" onPress={() => nav.navigate('login')} />
         <Button title="Tela de Tarefas" onPress={() => nav.navigate("tarefa",{tarefa: {id:1}})} />
      </View>
    );
}

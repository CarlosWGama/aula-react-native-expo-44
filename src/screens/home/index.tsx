import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { TarefaNavegacaoParams } from '../../navigation/tarefa';
import { Toolbar } from '../../components/toolbar';
import { Fab } from '../../components/fab';
import { ItemTarefa } from './item-tarefa';

export interface HomeScreenProps {
    route: RouteProp<TarefaNavegacaoParams, "home">
}

export function HomeScreen (props: HomeScreenProps) {

    //Constantes
    type navProp = NativeStackNavigationProp<TarefaNavegacaoParams, 'home'>;
    const nav = useNavigation<navProp>();

    ///Renderizando
    return (
      <View style={{flex:1}}>
          <Toolbar titulo="Home" menu />
          <Fab onPress={() => nav.navigate("tarefa", {})}/>
          

          <ItemTarefa tarefa={{descricao: 'Teste', data: '01/01/2022'}} onEditar={(tarefa) => nav.navigate('tarefa', {tarefa})} onExcluir={(id) => console.log(id)}/>
      </View>
    );
}

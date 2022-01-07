import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { TarefaNavegacaoParams } from '../../navigation/tarefa';

export interface TarefaScreenProps {
    route: RouteProp<TarefaNavegacaoParams, "home">
}

export function TarefaScreen (props: TarefaScreenProps) {

    //Constantes  
    const nav = useNavigation<NativeStackNavigationProp<TarefaNavegacaoParams, "home">>();

    //Renderizando
    return (
      <View>
         <Text>TarefaScreen</Text>
         <Button title="Voltar" onPress={() => nav.goBack()} />
      </View>
    );
}

import * as React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { TarefaNavegacaoParams } from '../../navigation/tarefa';
import { Toolbar } from '../../components/toolbar';
import { Fab } from '../../components/fab';
import { ItemTarefa } from './item-tarefa';
import { FlatList } from 'react-native-gesture-handler';
import { Tarefa } from '../../model/tarefa';

export interface HomeScreenProps {
    route: RouteProp<TarefaNavegacaoParams, "home">
}

export function HomeScreen (props: HomeScreenProps) {

    //Constantes
    type navProp = NativeStackNavigationProp<TarefaNavegacaoParams, 'home'>;
    const nav = useNavigation<navProp>();
    const [ tarefas, setTarefas ] = React.useState<Tarefa[]>([
        {id: "1", descricao: "Tarefa 1", data: "01/01/2019"},
        {id: "2", descricao: "Tarefa 2", data: "01/01/2020"},
        {id: "3", descricao: "Tarefa 3", data: "01/01/2021"},
        {id: "4", descricao: "Tarefa 4", data: "01/01/2022"},
    ])

    //Funções
    const excluir = (id:any) => {
        Alert.alert("Excluir Tarefa", "Deseja realmente excluir essa tarefa?", [
           {text: 'Sim', onPress: () => {
              console.log('Excluindo item');
           }},
           {text: 'Não'}
        ])
    }
       

    ///Renderizando
    return (
      <View style={{flex:1}}>
          <Toolbar titulo="Home" menu />

           {/* LISTA DE TAREFAS */}
           <FlatList
            data={tarefas}
            extraData={tarefas}
            keyExtractor={(t) => String(t.id)}
            renderItem={({item}) => (
                <ItemTarefa 
                tarefa={item} 
                onEditar={(tarefa) => nav.navigate('tarefa', {tarefa})}
                onExcluir={excluir}/> 
                )} />
        
        <Fab onPress={() => nav.navigate("tarefa", {})}/>
      </View>
    );
}

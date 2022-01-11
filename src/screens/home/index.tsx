import * as React from 'react';
import { View, Text, Button, Alert, ToastAndroid } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { TarefaNavegacaoParams } from '../../navigation/tarefa';
import { Toolbar } from '../../components/toolbar';
import { Fab } from '../../components/fab';
import { ItemTarefa } from './item-tarefa';
import { FlatList } from 'react-native-gesture-handler';
import { Tarefa } from '../../model/tarefa';
import api from '../../providers/api';

export interface HomeScreenProps {
    route: RouteProp<TarefaNavegacaoParams, "home">
}

export function HomeScreen (props: HomeScreenProps) {

    //Constantes
    type navProp = NativeStackNavigationProp<TarefaNavegacaoParams, 'home'>;
    const nav = useNavigation<navProp>();
    const [ tarefas, setTarefas ] = React.useState<Tarefa[]>([])

    //Funções
    React.useEffect(() => {
        //Adiciona o listener uam unica vez ao carregar a tela
        nav.addListener('focus', () => {
            api.get('/tarefas').then(response => setTarefas(response.data))
        });
    }, [])

    const excluir = (id:any) => {
        Alert.alert("Excluir Tarefa", "Deseja realmente excluir essa tarefa?", [
           {text: 'Sim', onPress: async () => {
                await api.delete(`/tarefas/${id}`)
                await api.get('/tarefas').then(response => setTarefas(response.data))
                ToastAndroid.show('Tarefa excluida', ToastAndroid.LONG)
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

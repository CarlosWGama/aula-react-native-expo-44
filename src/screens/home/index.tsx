import * as React from 'react';
import { View, Text, Button, Alert, ToastAndroid, LogBox } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { TarefaNavegacaoParams } from '../../navigation/tarefa';
import { Toolbar } from '../../components/toolbar';
import { Fab } from '../../components/fab';
import { ItemTarefa } from './item-tarefa';
import { FlatList } from 'react-native-gesture-handler';
import { Tarefa } from '../../model/tarefa';
import { getAuth } from 'firebase/auth';
import { getDatabase, onValue, ref, set } from 'firebase/database';

export interface HomeScreenProps {
    route: RouteProp<TarefaNavegacaoParams, "home">
}

export function HomeScreen (props: HomeScreenProps) {

    //Constantes
    type navProp = NativeStackNavigationProp<TarefaNavegacaoParams, 'home'>;
    const nav = useNavigation<navProp>();
    const [ tarefas, setTarefas ] = React.useState<Tarefa[]>([])
    const auth = getAuth();
    const db = getDatabase();

    React.useEffect(() => {
        //Desativa a mensagem de alerta no React Native
        LogBox.ignoreLogs(['Setting a timer']) //Desativa a mensagem de alerta no React Native
        nav.addListener('focus', () => {
            console.log('A')
            onValue(ref(db, `tarefas/${auth.currentUser?.uid}`), (snapshots) => {
                const resultado: Tarefa[] = [];
                snapshots.forEach(snapshot => {
                    resultado.push(snapshot.val())   
                });
                setTarefas(resultado);
            });
        })
    })

    //Funções
    const excluir = (id:any) => {
        Alert.alert("Excluir Tarefa", "Deseja realmente excluir essa tarefa?", [
           {text: 'Sim', onPress: async () => {
                console.log('Excluindo item');
                await set(ref(db, `tarefas/${auth.currentUser?.uid}/${id}`), null);

                onValue(ref(db, `tarefas/${auth.currentUser?.uid}`), (snapshots) => {
                    const resultado: Tarefa[] = [];
                    snapshots.forEach(snapshot => {resultado.push(snapshot.val())});
                    setTarefas(resultado);
                })

                ToastAndroid.show('Tarefa Excluída', ToastAndroid.LONG);
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

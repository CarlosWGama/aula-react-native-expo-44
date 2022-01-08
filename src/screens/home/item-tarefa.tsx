import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { SwipeRow } from 'react-native-swipe-list-view';
import { Tarefa } from '../../model/tarefa';

export interface ItemTarefaProps {
    tarefa: Tarefa
    onEditar(tarefa:Tarefa);
    onExcluir(id:string);
}

export function ItemTarefa (props: ItemTarefaProps) {
    return (
        <SwipeRow disableRightSwipe rightOpenValue={-120} stopRightSwipe={-120}>
        {/* OCULTA */}
        <View style={styles.invisivel}>
            <Button buttonStyle={styles.btnEditar} containerStyle={{borderRadius: 0}} titleStyle={styles.btn} title="Editar" onPress={() => props.onEditar(props.tarefa)} />
            <Button buttonStyle={styles.btnExcluir} containerStyle={{borderRadius: 0}}  titleStyle={styles.btn} title="Excluir" onPress={() => props.onExcluir(props.tarefa.id)} />
        </View>
        {/* VISIVEL */}
        <View style={styles.container}>
            <Text>{props.tarefa.descricao}</Text>
            <Text>{props.tarefa.data}</Text>
        </View>
    </SwipeRow>
    

);
}


const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row',
        padding: 10, 
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    invisivel: {
        flexDirection: "row",
        justifyContent: 'flex-end',
        height: '100%'
    },
    btn: { color: 'white' },
    btnEditar: {backgroundColor: 'blue', width:60, borderRadius: 0},
    btnExcluir: {backgroundColor: 'red', width:60, borderRadius: 0}
})
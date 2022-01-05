import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from 'react-native-elements';

export interface InputRoundProps {
    texto?:string;
    senha?:boolean;
    onBlur?(campo:any):void;
    icone: string;
    placeholder: string;
    onChangeText?(text:string):void;
}


function InputRoundComponent (props: InputRoundProps) {
    return (
        <View>
            {props.texto && <Text style={styles.texto}>{props.texto}</Text>}
            <Input placeholder={props.placeholder}  
            leftIcon={{name:props.icone, color:'white'}}
            onBlur={props.onBlur}
            placeholderTextColor="white"
            inputContainerStyle={styles.containerInput}
            inputStyle={{color:'white'}} 
            onChangeText={props.onChangeText}
            secureTextEntry={props.senha}
            />
        </View>
    );
}

export const InputRound = React.memo(InputRoundComponent)

const styles = StyleSheet.create({
    texto: {fontSize: 20, color: 'white'},
    containerInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 30,
        padding: 5,
        marginBottom: -10
    },
});

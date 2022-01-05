import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import bg from './../../assets/imgs/background.png';
import { InputRound } from './input';

export interface LoginScreenProps {
}

export function LoginScreen (props: LoginScreenProps) {

    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    return (
        <ImageBackground source={bg} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.logo}>APP</Text>

                {/* EMAIL  */}
                <InputRound placeholder='Digite seu email' icone='person' onChangeText={setEmail} />

                {/* SENHA */}
                <InputRound placeholder='Digite sua senha' icone='lock' senha  onChangeText={setSenha}/>

                <Button title="Logar" containerStyle={{borderRadius:30}} raised={true} />

                <Text style={styles.cadastrar}>Não possui conta? Clique aqui para se cadastrar</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {width:'100%', height:'100%'},
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        alignItems: 'stretch'
    },
    logo: { color: 'white', fontSize: 50, textAlign: 'center'},
    cadastrar: {
        color: 'white',
        fontSize: 20,
        textDecorationLine: 'underline',
        margin: 30,
        textAlign: 'center'
    }   
});
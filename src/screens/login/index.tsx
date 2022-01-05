import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import bg from './../../assets/imgs/background.png';

export interface LoginscreenProps {
}

export function Loginscreen (props: LoginscreenProps) {

    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    return (
        <ImageBackground source={bg} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.logo}>APP</Text>

                {/* EMAIL  */}
                <Input placeholder="Digite seu email" 
                    value={email}
                    onChangeText={setEmail}
                    inputContainerStyle={styles.containerInput}
                    inputStyle={{color:'white'}}
                    leftIcon={{name:'person', color: 'white'}} />

                {/* SENHA */}
                <Input placeholder="Digite sua senha" 
                    value={senha} onChangeText={setSenha}
                    inputContainerStyle={styles.containerInput}
                    inputStyle={{color:'white'}}
                    leftIcon={{name:'lock', color: 'white'}}
                    secureTextEntry={true} />

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
    containerInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 30,
        padding: 5,
        marginBottom: -10
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
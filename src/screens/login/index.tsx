import { Formik } from 'formik';
import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet, ActivityIndicator } from 'react-native';
import { Button, Input } from 'react-native-elements';
import bg from './../../assets/imgs/background.png';
import { InputRound } from './input';
import * as Yup from 'yup';

export interface LoginScreenProps {
}

export function LoginScreen (props: LoginScreenProps) {

    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    //Função que exibe o login
    const logar = async (dados) => {
        console.log(dados)

        await new Promise((resolve) => setTimeout(resolve, 3000))

        if (dados.email == "teste@teste.com" && dados.senha == "123456")
            console.log('Logado com sucesso');
        else
            console.log('Email ou senha incorreto');
    }

    return (
        <ImageBackground source={bg} style={styles.background}>
            <Formik 
                initialValues={{email, senha}}
                validationSchema={Yup.object({
                    email: Yup.string().required('Informe o email').email('Não é um formato de e-mail válido'),
                    senha: Yup.string().required('Informe a senha').min(6, 'A senha precisa de 6 caracteres')
                })}
                onSubmit={logar}
            >
                {({errors, touched, handleChange, handleSubmit, handleBlur, isSubmitting}) => (
                    <View style={styles.container}>
                        <Text style={styles.logo}>APP</Text>

                        {/* EMAIL  */}
                        <InputRound placeholder='Digite seu email' icone='person' onChangeText={handleChange('email')} onBlur={handleBlur('email')} />
                        {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
                        {/* SENHA */}
                        <InputRound placeholder='Digite sua senha' icone='lock' senha  onChangeText={handleChange('senha')} onBlur={handleBlur('senha')}/>
                        {touched.senha && errors.senha && <Text style={styles.error}>{errors.senha}</Text>}

                        {isSubmitting && <ActivityIndicator size="large" color="blue" />}
                        {!isSubmitting && <Button title="Logar" onPress={() => handleSubmit()} containerStyle={{borderRadius:30}} raised={true} />}

                        <Text style={styles.cadastrar}>Não possui conta? Clique aqui para se cadastrar</Text>
                    </View>
                )}
            </Formik>
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
    error:{color:'white', fontSize: 20, textAlign:'right'},
    cadastrar: {
        color: 'white',
        fontSize: 20,
        textDecorationLine: 'underline',
        margin: 30,
        textAlign: 'center'
    }   
});
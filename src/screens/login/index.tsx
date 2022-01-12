import { Formik } from 'formik';
import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet, ActivityIndicator, ToastAndroid, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Button, Input } from 'react-native-elements';
import bg from './../../assets/imgs/background.png';
import { InputRound } from './input';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavegacaoPrincipalParams } from '../../navigation';
import { Modalize } from 'react-native-modalize';
import api from '../../providers/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAutenticacaoContext } from '../../providers/autenticacao';

export interface LoginScreenProps {
}

export function LoginScreen (props: LoginScreenProps) {

    //Constantes
    type navProps = NativeStackNavigationProp<NavegacaoPrincipalParams, 'login'>;
    const nav = useNavigation<navProps>();
    const modal = React.useRef<Modalize>();
    const { setUsuario } = useAutenticacaoContext();
    
    //Funções
    const logar = async (dados) => {
        console.log(dados)  
        
        await api.post('/login', dados)
            .then(response => {
                setUsuario(dados.email);
                nav.navigate('app')
                AsyncStorage.setItem('jwt', response.data.jwt);
            })
            .catch(() => ToastAndroid.show("Email ou senha incorreta", 3000));
    }
    
    //Cadastra um usuário
    const cadastrar = async (usuario) => {
        console.log(usuario)
        
        await api.post('/usuarios', {usuario})
            //retornou código de sucesso 201
            .then(() => ToastAndroid.show('Cadastrado com sucesso', ToastAndroid.LONG))
            //retornou código de erro 30x/40x/50x
            .catch(() => ToastAndroid.show('Falha ao cadastrar usuário', ToastAndroid.LONG));
         
        modal.current?.close();
    }

    //Renderizando
    return (
        <ImageBackground source={bg} style={styles.background}>
            <Formik 
                initialValues={{email:'', senha:''}}
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
                        {!isSubmitting && <Button title="Logar" onPress={() => handleSubmit()} containerStyle={{borderRadius:30}} />}

                        <TouchableOpacity onPress={() => modal.current?.open()}>
                            <Text style={styles.cadastrar}>Não possui conta? Clique aqui para se cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
            {/* modalHeight define a altura que o modal abre e modalStyle aplica um estilo ao modal */}
            
            <Modalize ref={modal}
                modalStyle={{padding: 20}}
                modalHeight={400}  
            >
                <Formik
                    initialValues={{email:'', senha:'', nome: ''}}
                    onSubmit={cadastrar}
                >
                    {({handleChange, handleSubmit, isSubmitting}) => (
                        <>
                            <Input onChangeText={handleChange('email')} placeholder='Digite seu email' keyboardType='email-address' />
                            <Input onChangeText={handleChange('nome')} placeholder='Digite seu nome'  />
                            <Input onChangeText={handleChange('senha')} placeholder='Digite sua senha' secureTextEntry />
                            <Button type='clear' onPress={() => handleSubmit()} title="Cadastrar" disabled={isSubmitting} />
                        </>
                        )}
                </Formik>
            </Modalize>
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
    errorLogin: {color: 'white', textAlign: 'center'},
    cadastrar: {
        color: 'white',
        fontSize: 20,
        textDecorationLine: 'underline',
        margin: 30,
        textAlign: 'center'
    }   
});
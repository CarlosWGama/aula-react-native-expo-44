import { Formik } from 'formik';
import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet, ActivityIndicator, ToastAndroid, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';
import bg from './../../assets/imgs/background.png';
import { InputRound } from './input';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavegacaoPrincipalParams } from '../../navigation';
import { Modalize } from 'react-native-modalize';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { AdMobBanner } from 'expo-ads-admob';

export interface LoginScreenProps {
}

export function LoginScreen (props: LoginScreenProps) {

    //Constantes
    type navProps = NativeStackNavigationProp<NavegacaoPrincipalParams, 'login'>;
    const nav = useNavigation<navProps>();
    const modal = React.useRef<Modalize>();
    //Retorna uma instancia de autenticação
    const auth = getAuth(); 
    
    //Funções
    const logar = async (dados) => {
        await signInWithEmailAndPassword(auth, dados.email, dados.senha)
            .then(() => nav.navigate('app'))
            .catch(() => ToastAndroid.show("Email ou senha incorreta", 3000))
        
    }
    
    const cadastrar = async (dados) => {
        //cria um usuário usando email e senha
        await createUserWithEmailAndPassword(auth, dados.email, dados.senha)
            .then(usuario => ToastAndroid.show('Usuário criado com sucesso', ToastAndroid.LONG))
            .catch(error => ToastAndroid.show('Falha ao criar usuário', ToastAndroid.LONG))
        
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

            <AdMobBanner adUnitID='ca-app-pub-3940256099942544/6300978111' bannerSize='smartBannerLandscape' />
            {/* modalHeight define a altura que o modal abre e modalStyle aplica um estilo ao modal */}
            
            <Modalize ref={modal}
                modalStyle={{padding: 20}}
                modalHeight={400}  
            >
                <Formik
                    initialValues={{email:'', senha:''}}
                    onSubmit={cadastrar}
                >
                    {({handleChange, handleSubmit, isSubmitting}) => (
                        <>
                            <Input onChangeText={handleChange('email')} placeholder='Digite seu email' keyboardType='email-address' />
                            <Input onChangeText={handleChange('senha')} placeholder='Digite sua senha' secureTextEntry />
                            <Button type='clear' onPress={() => handleSubmit()} title={isSubmitting ? 'Aguarde' : 'Cadastrar' } disabled={isSubmitting} />
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
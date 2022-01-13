import { getAuth, updateProfile, updatePassword } from 'firebase/auth';
import * as React from 'react';
import { View, Text, ToastAndroid } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Toolbar } from '../../../components/toolbar';


export function ConfigGeralScreen (props: any) {
  const auth = getAuth();

  const [nome, setNome] = React.useState<any>('');
  const [senha, setSenha] = React.useState("");

  /** Altera os dados da conta */
  const alterarPerfil = () => {
    //@ts-ignore
    updateProfile(auth.currentUser, {displayName: nome}).then(() => {
      ToastAndroid.show('Nome alterado', 2000);
    }).catch(erro => {
      console.log(erro)
      ToastAndroid.show('Nao foi possível realizar a ação', 2000);
    })
    
  }

  /** Altera a senha */
  const alterarSenha = () => {
    //@ts-ignore
    updatePassword(auth.currentUser, senha)
      .then(() => {
        ToastAndroid.show('Senha alterada', 2000);
      })
      .catch(erro => {
        console.log(erro)
        ToastAndroid.show('Nao foi possível realizar a ação', 2000);
      })
  }



    return (
      <View>
          <Toolbar titulo="Configurações Gerais" menu />
          <Text style={{textAlign:'center', fontSize:20}}>Olá {auth.currentUser?.displayName}</Text>
          <Text style={{textAlign:'center', fontSize:20}}>{auth.currentUser?.email}</Text>
          {/* NOME */}
          <Input label="Nome" placeholder="Digite seu novo nome" onChangeText={(nome) => setNome(nome)} />
          <Button title="Alterar nome" onPress={alterarPerfil} />
          
          {/* SENHA */}
          <Input label="Senha" secureTextEntry placeholder="Digite sua nova senha" onChangeText={(senha) => setSenha(senha)} />
          <Button title="Alterar nome" onPress={alterarSenha} />
      </View>
    );
}

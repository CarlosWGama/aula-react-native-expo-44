import * as React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavegacaoPrincipalParams } from '../../navigation';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export function InicialScreen (props: any) {
    const nav = useNavigation<NativeStackNavigationProp<NavegacaoPrincipalParams, 'inicial'>>()
    const auth = getAuth();

    onAuthStateChanged(auth, user => {
        nav.navigate(user == null ? "login" : "app")
    })

    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
         <Text>Aula React Native</Text>
         <Text>Bem Vindo</Text>
      </View>
    );
}

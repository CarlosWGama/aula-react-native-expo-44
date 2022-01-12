import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { NavegacaoPrincipal } from './src/navigation';
import { AutenticacaoProvider } from './src/providers/autenticacao';

export default function App() {
  return (
    <View style={{flex:1}}>
      <AutenticacaoProvider>
        <NavegacaoPrincipal/>
      </AutenticacaoProvider>
      <StatusBar style='light'  backgroundColor="transparent"/>
    </View>
  );
}

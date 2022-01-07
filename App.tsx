import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { NavegacaoPrincipal } from './src/navigation';

export default function App() {
  return (
    <View style={{flex:1}}>
      <NavegacaoPrincipal/>
      <StatusBar style='light'  backgroundColor="transparent"/>
    </View>
  );
}

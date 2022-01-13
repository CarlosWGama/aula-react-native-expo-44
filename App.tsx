import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { NavegacaoPrincipal } from './src/navigation';
import { initializeApp } from 'firebase/app';

import { firebaseConfig } from './src/config/firebase-config';

export default function App() {
  initializeApp(firebaseConfig);
  return (
    <View style={{flex:1}}>
      <NavegacaoPrincipal/>
      <StatusBar style='light'  backgroundColor="transparent"/>
    </View>
  );
}

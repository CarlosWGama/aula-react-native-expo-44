import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import bg from './../../assets/imgs/background.png';

export interface LoginscreenProps {
}

export function Loginscreen (props: LoginscreenProps) {
    return (
        <ImageBackground source={bg} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.logo}>APP</Text>
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
    logo: { color: 'white', fontSize: 50, textAlign: 'center'}
});
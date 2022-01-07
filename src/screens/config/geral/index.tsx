import * as React from 'react';
import { View, Text } from 'react-native';
import { Toolbar } from '../../../components/toolbar';

export interface ConfigGeralScreenProps {
}

export function ConfigGeralScreen (props: ConfigGeralScreenProps) {
    return (
      <View>
            <Toolbar titulo="Configurações Gerais" menu />

            <Text>ConfigGeralScreen</Text>
      </View>
    );
}

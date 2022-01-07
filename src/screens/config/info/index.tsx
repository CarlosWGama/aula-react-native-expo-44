import * as React from 'react';
import { View, Text } from 'react-native';
import { Toolbar } from '../../../components/toolbar';

export interface ConfigInfoScreenProps {
}

export function ConfigInfoScreen (props: ConfigInfoScreenProps) {
    return (
      <View>
            <Toolbar titulo="Informações" menu />
            <Text>ConfigInfoScreen</Text>
      </View>
    );
}

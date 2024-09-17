import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../themes/app.Theme';

type Props = {
  texto: string;
  style: object;
  color?: string;
  ancho?: boolean;
  onPress: (numero?: string) => void;
};

export const Boton = ({
  texto,
  style,
  ancho,
  onPress,
  color = '#2D2D2D',
}: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress(texto)}>
      <View style={{...style, backgroundColor: color, width: ancho ? 180 : 80}}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#9b9b9b' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

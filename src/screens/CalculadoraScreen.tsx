// @ts-nocheck
import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../themes/app.Theme';
import {Boton} from '../components/Boton';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    numeroAnterior,
    numero,
    limpiar,
    armarNumero,
    positivoNegativo,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();
  return (
    <View style={styles.calculaoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequenp}>{numeroAnterior}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={styles.fila}>
        <Boton
          onPress={limpiar}
          texto="C"
          style={styles.boton}
          color="#9b9b9b"
        />
        <Boton
          onPress={positivoNegativo}
          texto="+/-"
          style={styles.boton}
          color="#9b9b9b"
        />
        <Boton
          onPress={btnDelete}
          texto="del"
          style={styles.boton}
          color="#9b9b9b"
        />
        <Boton
          onPress={btnDividir}
          texto="/"
          style={styles.boton}
          color="#FF9427"
        />
      </View>
      <View style={styles.fila}>
        <Boton onPress={armarNumero} texto="7" style={styles.boton} />
        <Boton onPress={armarNumero} texto="8" style={styles.boton} />
        <Boton onPress={armarNumero} texto="9" style={styles.boton} />
        <Boton
          onPress={btnMultiplicar}
          texto="x"
          style={styles.boton}
          color="#FF9427"
        />
      </View>
      <View style={styles.fila}>
        <Boton onPress={armarNumero} texto="4" style={styles.boton} />
        <Boton onPress={armarNumero} texto="5" style={styles.boton} />
        <Boton onPress={armarNumero} texto="6" style={styles.boton} />
        <Boton
          onPress={btnRestar}
          texto="-"
          style={styles.boton}
          color="#FF9427"
        />
      </View>
      <View style={styles.fila}>
        <Boton onPress={armarNumero} texto="1" style={styles.boton} />
        <Boton onPress={armarNumero} texto="2" style={styles.boton} />
        <Boton onPress={armarNumero} texto="3" style={styles.boton} />
        <Boton
          onPress={btnSumar}
          texto="+"
          style={styles.boton}
          color="#FF9427"
        />
      </View>
      <View style={styles.fila}>
        <Boton
          onPress={armarNumero}
          texto="0"
          style={styles.boton}
          ancho={true}
        />
        <Boton onPress={armarNumero} texto="." style={styles.boton} />
        <Boton
          onPress={calcular}
          texto="="
          style={styles.boton}
          color="#FF9427"
        />
      </View>
    </View>
  );
};

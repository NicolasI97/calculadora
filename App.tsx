import React from 'react';
import {CalculadoraScreen} from './src/screens/CalculadoraScreen';
import {SafeAreaView} from 'react-native';
import {styles} from './src/themes/app.Theme';

export const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

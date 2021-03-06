import React from 'react';
import { Text, View, Button } from 'react-native';
import style from './style';

export const Dashboard = ({ navigation }) => (
  <View style={style.container}>
    <Text style={style.text}>Gerenciador de Tarefa</Text>
  <Button
    title='Cadastrar novo contato'
    onPress={() => navigation.navigate('addtarefa')}
  />
  </View>
);

export default tela_inicial;
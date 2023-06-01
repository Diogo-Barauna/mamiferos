import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Image 
        source={require('./assets/logo.png')}
        style={styles.logo}
        />
        <Text style={styles.txtLogo}>Banco de elefantes</Text>
        <View style={styles.btns}>
          <TouchableOpacity style={styles.button}>
              <Text>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
              <Text>Pesquisar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
              <Text>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
              <Text>Deletar</Text>
          </TouchableOpacity>
        </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DADADA',
    alignItems: 'center',
    justifyContent: 'center',
    height: 667,
    width:375
  },
  logo: {
    top: 30,
    height:80,
    width:80,
    position: 'absolute'
  },
  txtLogo:{
    fontSize:35,
  },
  btns: {
    top: 40,
    flexDirection: 'column',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height:50,
    width:170,
    border:'solid',
    marginTop: 40
  }
});

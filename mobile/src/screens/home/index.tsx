import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Image 
        source={require('../../../assets/logo.png')}
        style={styles.logo}
        />
        <Text style={styles.txtLogo}>Banco de elefantes</Text>
        <View style={styles.btns}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Register")}>
              <Text style={styles.btnTxt}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Search")}>
              <Text style={styles.btnTxt}>Pesquisar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Edit")}>
              <Text style={styles.btnTxt}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Delete")} style={[styles.button, styles.deleteBtn]}>
              <Text style={styles.deleteBtnTxt}>Deletar</Text>
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
    top: 120,
    fontFamily: 'Tahoma',
    position: 'absolute'
  },
  btns: {
    top: 60,
    flexDirection: 'column',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height:70,
    width:190,
    borderRadius: 15,
    marginTop: 40,
    backgroundColor: '#4E4E4E',
  },
  btnTxt: {
    color: 'white',
    fontSize:25,
    fontFamily: 'Tahoma',
  },
  deleteBtn: {
    backgroundColor: '#D30000',
    
  },
  deleteBtnTxt: {
    fontSize:25,
    color: 'white'
  }
});

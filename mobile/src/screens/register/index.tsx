import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function(){
  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('');
  const [idade, setIdade] = useState('');
  const [saudavel, setSaudavel] = useState(true); 
  const [showPopup, setShowPopup] = useState(false); 

  const cadastrarElefante = async () => {
    try {
      const response = await axios.post('http://localhost:3333/reg', {
        nome,
        sexo,
        idade: Number(idade),
        saudavel,
      });

      console.log(response.data.message);
    } catch (error) {
      console.error('Erro ao cadastrar elefante:', error);
    }
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.topTxt}>Insira as informações do elefante:</Text>
      <Text style={styles.labels}>Nome:</Text>
      <TextInput value={nome} onChangeText={setNome} style={styles.inputs}/>

      <Text style={styles.labels}>Sexo:</Text>
      <TextInput value={sexo} onChangeText={setSexo} style={styles.inputs}/>

      <Text style={styles.labels}>Idade:</Text>
      <TextInput value={idade} onChangeText={setIdade} style={styles.inputs}/>

      <Text style={styles.labels}>Saudável:</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          }}
          onPress={() => setSaudavel(true)}
        >
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: saudavel ? 'blue' : '#000',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {saudavel && (
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 5,
                  backgroundColor: 'blue',
                }}
              />
            )}
          </View>
          <Text style={styles.radioTxt} >Sim</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => setSaudavel(false)}
        >
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: !saudavel ? 'blue' : '#000',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {!saudavel && (
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 5,
                  backgroundColor: 'blue',
                }}
              />
            )}
          </View>
          <Text style={styles.radioTxt}>Não</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={cadastrarElefante}>
          <Text style={styles.btnTxt}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.homeBtn} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.homeBtnTxt}>Início</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DADADA',
    alignItems: 'center',
    justifyContent: 'center',
    height: 667,
    width:375
  },
  topTxt: {
    fontSize:24,
    top: 40,
    fontFamily: 'Tahoma',
    position: 'absolute'
  },
  labels: {
    fontFamily: 'Tahoma',
    marginTop: 30,
    padding: 7,
    fontSize: 20
  },
  inputs: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    fontSize:20,
    height:40,
    width: 200,
    borderRadius: 10,
    borderColor: '#000', 
    borderWidth: 2,
  },
  radioTxt:{
    fontSize: 20,
    paddingLeft:10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height:50,
    width:190,
    borderRadius: 15,
    marginTop: 20,
    backgroundColor: '#0030D3',
  },
  btnTxt: {
    color: 'white',
    fontSize:25,
    fontFamily: 'Tahoma',
  },
  homeBtn:{
    position: 'absolute',
    bottom: 20,
    left: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height:40,
    width:130,
    borderRadius: 5,
    backgroundColor: '#4E4E4E',
  },
  homeBtnTxt: {
    color: 'white',
    fontSize:20,
    fontFamily: 'Tahoma',
  }
  
});
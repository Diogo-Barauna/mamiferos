import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const PesquisarElefantes = () => {
  const [nome, setNome] = useState('');
  const [elefantes, setElefantes] = useState([]);

  const pesquisarElefantes = async () => {
    try {
      const response = await axios.get('http://localhost:3333/search', {
        params: {
          nome: nome,
        },
      });

      setElefantes(response.data.elefantes);
    } catch (error) {
      alert('Erro ao pesquisar elefantes');
    }
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.topTxt}>Insira o nome do elefante:</Text>
      <View style={styles.main}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput style={styles.input} value={nome} onChangeText={setNome} />

        <TouchableOpacity style={styles.button} onPress={pesquisarElefantes}>
          <Text style={styles.btnTxt}>Pesquisar</Text>
        </TouchableOpacity>

        <ScrollView style={styles.scrollView}>
          {elefantes.map((elefante) => (
            <View style={styles.result} key={elefante.nome}>
              <Text style={styles.resultTxt}>Nome: {elefante.nome}</Text>
              <Text style={styles.resultTxt}>Sexo: {elefante.sexo}</Text>
              <Text style={styles.resultTxt}>Idade: {elefante.idade}</Text>
              <Text style={styles.resultTxt}>
                Saúdavel: {elefante.saudavel ? 'Sim' : 'Não'}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
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
    width: 375,
  },
  main: {
    bottom: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topTxt: {
    fontSize: 24,
    top: 40,
    fontFamily: 'Tahoma',
    position: 'absolute',
  },
  label: {
    fontFamily: 'Tahoma',
    marginTop: 30,
    padding: 7,
    fontSize: 30,
  },
  input: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    fontSize: 30,
    height: 50,
    width: 210,
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 2,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 200,
    borderRadius: 15,
    marginTop: 20,
    backgroundColor: '#0030D3',
  },
  btnTxt: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Tahoma',
  },
  foundEl: {
    marginTop: 25,
    fontSize: 25,
    fontFamily: 'Tahoma',
  },
  scrollView: {
    top: 40,
    maxHeight: 240, 
    width: 300,
  },
  result: {
    backgroundColor: '#4E4E4E',
    padding: 10,
    marginTop: 10,
    borderColor: '#1D1D1D',
    borderWidth: 2,
    borderRadius: 10,
  },
  resultTxt: {
    color: '#EEEEEE',
    fontSize: 15,
    fontFamily: 'Tahoma',
  },
  homeBtn: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 130,
    borderRadius: 5,
    backgroundColor: '#4E4E4E',
  },
  homeBtnTxt: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Tahoma',
  },
});

export default PesquisarElefantes;

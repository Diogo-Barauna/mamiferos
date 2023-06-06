import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
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
      <Text style={styles.label}>Nome:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />
        
      <TouchableOpacity style={styles.button} onPress={pesquisarElefantes}>
        <Text style={styles.btnTxt}>Pesquisar</Text>
      </TouchableOpacity>

      <Text>Elefantes Encontrados:</Text>
      {elefantes.map((elefante) => (
        <View>
        <Text key={elefante.nome}>Nome: {elefante.nome}</Text>
        <Text key={elefante.sexo}>Sexo: {elefante.sexo}</Text>
        <Text key={elefante.idade}>Idade: {elefante.idade}</Text>
        <Text key={elefante.saudavel}>Saúdavel: {elefante.saudavel ? 'Sim' : 'Não'}</Text>

        </View>
      ))}
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
      fontSize: 20,
    },
    input: {
      backgroundColor: '#fff',
      paddingLeft: 10,
      fontSize: 20,
      height: 40,
      width: 200,
      borderRadius: 10,
      borderColor: '#000',
      borderWidth: 2,
    },
    radioTxt: {
      fontSize: 20,
      paddingLeft: 10,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      width: 190,
      borderRadius: 15,
      marginTop: 20,
      backgroundColor: '#0030D3',
    },
    btnTxt: {
      color: 'white',
      fontSize: 25,
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
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    popupContainer: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    popupText: {
      fontSize: 18,
      fontFamily: 'Tahoma',
      marginBottom: 20,
    },
    closeButton: {
      backgroundColor: '#0030D3',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    closeButtonText: {
      color: 'white',
      fontSize: 16,
      fontFamily: 'Tahoma',
    },
  });

export default PesquisarElefantes;

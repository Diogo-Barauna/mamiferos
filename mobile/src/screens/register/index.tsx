import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function(){
  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('');
  const [idade, setIdade] = useState('');
  const [saudavel, setSaudavel] = useState(true); // Valor inicial: true (Sim)

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

  return (
    <View>
      <Text>Nome:</Text>
      <TextInput value={nome} onChangeText={setNome} />

      <Text>Sexo:</Text>
      <TextInput value={sexo} onChangeText={setSexo} />

      <Text>Idade:</Text>
      <TextInput value={idade} onChangeText={setIdade} />

      <Text>Saudável:</Text>
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
              height: 20,
              width: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: saudavel ? 'blue' : 'gray',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {saudavel && (
              <View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 5,
                  backgroundColor: 'blue',
                }}
              />
            )}
          </View>
          <Text>Sim</Text>
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
              height: 20,
              width: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: !saudavel ? 'blue' : 'gray',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {!saudavel && (
              <View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 5,
                  backgroundColor: 'blue',
                }}
              />
            )}
          </View>
          <Text>Não</Text>
        </TouchableOpacity>
      </View>

      <Button title="Cadastrar" onPress={cadastrarElefante} />
    </View>
  );
};



import { useContext, useState } from "react";
import { Alert, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { TemaContext } from '../../contexts/TemaContext';
import { estilos } from './estilos';

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const {temaEscolhido}= useContext(TemaContext)
  const {login}= useContext(AutenticacaoContext)

  function logandoNoSistema(){
    const resultado = login(email, senha);

    if(resultado === 'ok'){
      navigation.navigate('Principal')
    } else {
      Alert.alert(resultado)
    }
  }

  const estilo = estilos(temaEscolhido)

  return (
    <View style={estilo.container}>
      <StatusBar />
      <Text style={estilo.titulo}>Login</Text>

      <View style={estilo.inputArea}>
        <TextInput
          style={estilo.input}
          placeholder="Email"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={estilo.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
        style={estilo.botao}
        onPress={() => logandoNoSistema()}
      >
        <Text style={estilo.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}


import { useContext } from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { TemaContext } from '../../contexts/TemaContext';
import { estilos } from './estilos';


export default function Finalizar({navigation}) {  
  const {temaEscolhido}= useContext(TemaContext)

  const estilo = estilos(temaEscolhido)

  return (
    <View style={estilo.container}>
      <StatusBar />

      <TouchableOpacity style={estilo.botao}
      onPress={() => navigation.navigate('Principal')}
      >
        <Text style={estilo.botaoTexto}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}


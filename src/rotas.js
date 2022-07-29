import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Tab = createNativeStackNavigator();

import Configuracao from './telas/Configuracao';
import Finalizar from './telas/Finalizar';
import Login from './telas/Login';
import Principal from './telas/Principal';
import Resumo from './telas/Resumo';

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Tab.Screen name="Principal" component={Principal} options={{ headerShown: false }}/>
        <Tab.Screen name="Configurações" component={Configuracao} options={{ headerTitleAlign: 'center' }}/>
        <Tab.Screen name="Resumo" component={Resumo} options={{ headerTitleAlign: 'center' }}/>
        <Tab.Screen name="Finalizar" component={Finalizar} options={{ headerTitleAlign: 'center' }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
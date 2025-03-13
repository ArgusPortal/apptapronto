import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CustomerTabsNavigator from './navigation/CustomerTabsNavigator';
import ShopTabsNavigator from './navigation/ShopTabsNavigator';
import { useAuth } from '../contexts/AuthContext';
import { CadastroClienteScreen } from '../components/Screen/Cliente/CadastroClienteScreen';
import { CadastroCantinaScreen } from '../components/Screen/Cantina/CadastroCantinaScreen';
import LoginClienteScreen from '../components/Screen/Cliente/LoginClienteScreen';
import LoginCantinaScreen from '../components/Screen/Cantina/LoginCantinaScreen';
import ListarCardapio from '../components/Screen/Cliente/ListarCardapio';
import CadastroProdutoScreen from '../components/Screen/Cantina/CadastroProdutoScreen';
import SacolaScreen from '../components/Screen/Cliente/SacolaScreen';

const Stack = createStackNavigator();

export const WrapperNavigation = ({ isCliente, isLogado }: { isCliente: boolean, isLogado: boolean }) => {
  const { user } = useAuth();
  
  if (!user) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={isCliente ? LoginClienteScreen : LoginCantinaScreen} />
        <Stack.Screen name="Cadastro" component={isCliente ? CadastroClienteScreen : CadastroCantinaScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isCliente ? (
        <Stack.Screen name="CustomerTabs" component={CustomerTabsNavigator} />
      ) : (
        <Stack.Screen name="ShopTabs" component={ShopTabsNavigator} />
      )}
      <Stack.Screen
        name="ListarCardapio"
        component={ListarCardapio}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='CadastroProdutoScreen'
        component={CadastroProdutoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SacolaScreen'
        component={SacolaScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default WrapperNavigation;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './src/contexts/AuthContext';
import { ThemeProvider } from './src/themes/ThemeContext';
import { ClienteProvider } from './src/contexts/ClienteContext';
import { CantinaProvider } from './src/contexts/CantinaContext';
import { WrapperNavigation } from './src/routes/WrapperNavigatorContext';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AuthProvider>
        <ThemeProvider>
          <ClienteProvider>
            <CantinaProvider>
              <WrapperNavigation isCliente={true} isLogado={false} />
            </CantinaProvider>
          </ClienteProvider>
        </ThemeProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

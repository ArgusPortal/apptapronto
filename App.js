import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

// Componente de tela simples para teste
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>App Tá Pronto</Text>
      <Text style={styles.subtitle}>Tela Inicial</Text>
      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>Detalhes</Text>
      <Text style={styles.subtitle}>Esta é a tela de detalhes</Text>
    </View>
  );
}

const Stack = createStackNavigator();

// Versão com navegação básica, sem contextos ainda
export default function App() {
  console.log("App inicializado - versão com navegação básica");
  
  try {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{ title: 'Início' }}
            />
            <Stack.Screen 
              name="Details" 
              component={DetailsScreen} 
              options={{ title: 'Detalhes' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  } catch (error) {
    console.error("Erro ao renderizar App:", error);
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorTitle}>Erro ao carregar o aplicativo</Text>
          <Text style={styles.errorMessage}>{error.message}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
  },
  errorMessage: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  }
});
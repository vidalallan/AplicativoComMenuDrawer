import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Tela Inicial (Home)</Text>
      <Button 
        title="Abrir Menu" 
        onPress={() => navigation.openDrawer()} 
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Tela de Perfil</Text>
      <Button 
        title="Voltar para Home" 
        onPress={() => navigation.navigate('Home')} 
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Configurações</Text>
      <Button 
        title="Abrir Menu" 
        onPress={() => navigation.openDrawer()} 
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#fff',
            width: 240,
          },
          headerTintColor: '#333',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Início' }}
        />
        <Drawer.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ title: 'Meu Perfil' }}
        />
        <Drawer.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ title: 'Configurações' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
});
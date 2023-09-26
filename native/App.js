import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer style={styles.container}>
    
        <Tab.Navigator >
        <Tab.Screen name="Home"  component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25242c',

    alignItems: 'center',
    justifyContent: 'center',
    gap: 40
  },
  text: {
    color: '#D8DBE2',
    fontSize: 30,
    
  },
  cadastro: {
    color: '#e59638',
    fontSize: 20,
  },
  inputs: {

    borderColor: "#e59638",
    width: "90%",
    borderWidth: 2,
    borderRadius: 30,
    padding: 15,
    color: '#e59638',
    fontSize: 20,
    paddingLeft: 20,
  },
  agruparInputs: {

    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    width: '90%',
    height: '60%',
    gap: 30,
    borderRadius: 10,

  }, appButtonContainer: {
    elevation: 8,
    backgroundColor: "#e59638",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width : 200,
  },
  appButtonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },

});

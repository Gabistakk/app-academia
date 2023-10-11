import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Metas from '../pages/Metas';
import Dietas from '../pages/Dietas';
import Exercicios from '../pages/Exercicios';
import Resultados from '../pages/Resultados';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Home() {
  const Tab = createMaterialBottomTabNavigator();
  return (

      <Tab.Navigator barStyle={{ backgroundColor : '#0d090a'}}>
        <Tab.Screen name="Metas" component={Metas} options={{
          tabBarLabel: 'Metas',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="arrow-up-bold-hexagon-outline" color={color} size={26} />
          ),
        }} />
        <Tab.Screen name="Dietas" component={Dietas} options={{
          tabBarLabel: 'Dietas',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="food-apple-outline" color={color} size={26} />
          ),
        }}  />
        <Tab.Screen name="Exercicios" component={Exercicios} options={{
          tabBarLabel: 'Exercicios',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="weight-lifter" color={color} size={26} />
          ),
        }}  />
        <Tab.Screen name="Resultados" component={Resultados}options={{
          tabBarLabel: 'Resultados',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard-check-multiple-outline" color={color} size={26} />
          ),
        }}  />

      </Tab.Navigator>
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
    width: 200,
  },
  appButtonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },

});
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-Vindo a Academia </Text>

      <View style={styles.agruparInputs}>
        
        <TextInput style={styles.inputs} keyboardType="email-address" placeholderTextColor={'gray'} placeholder='Email' />

        <TextInput style={styles.inputs} placeholder='Senha' placeholderTextColor={'gray'} secureTextEntry={true} />

        <TextInput style={styles.inputs} placeholder='Confirmar Senha' placeholderTextColor={'gray'} secureTextEntry={true}  />
        <Text style={styles.cadastro}>Não Possui Conta? Cadastre-se </Text>
      <Button style={styles.botao} color={'#58a4b0'} title='Entrar' />
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373f51',

    alignItems: 'center',
    justifyContent: 'center',
    gap : 40
  },
  text: {
    color: '#D8DBE2',
    fontSize: 30,
  },
  cadastro: {
    color: '#D8DBE2',
    fontSize: 20,
  },
  inputs: {
    borderColor: "white",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: 'white',
    fontSize: 20,
    textAlign : 'center',
  },
  agruparInputs: {

    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    width: '90%',
    height: 300,
    gap : 30

  },

});

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Home from '../Home/Home.js';

export default function Login({ navigation }) {

    return (
        <View style={styles.container}>

            <Text style={styles.text}>Bem-Vindo a Academia </Text>

            <View style={styles.agruparInputs}>

                <TextInput style={styles.inputs} keyboardType="email-address" placeholderTextColor={'#e59638'} placeholder='Email' />
                <TextInput style={styles.inputs} placeholder='Senha' placeholderTextColor={'#e59638'} secureTextEntry={true} />
                <TextInput style={styles.inputs} placeholder='Confirmar Senha' placeholderTextColor={'#e59638'} secureTextEntry={true} />


                <TouchableOpacity style={styles.appButtonContainer} onPress={() => { navigation.navigate('Home') }}>
                    <Text style={styles.appButtonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
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



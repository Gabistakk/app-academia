import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MeuModal from '../components/MeuModal';


export default function Metas() {

    const [openModal,setOpenModal] = useState(false)


    const handleOpenModal = ()=>{
        setOpenModal(true)
    }

    return (
        <View style={styles.container}>

            <Text style={styles.text}> Informe o seu Peso atual: </Text>

            <View style={styles.agruparInputs}>

                <TextInput style={styles.inputs} placeholderTextColor={'#e59638'} placeholder='Digite aqui...' />
                
                <Text style={styles.text}> Voce quer : </Text>


                <TouchableOpacity style={styles.appButtonContainer} onPress={handleOpenModal}>
                    <Text style={styles.appButtonText} >Perder Peso</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Ganhar Peso</Text>
                </TouchableOpacity>
                 {
                    openModal ? (<><MeuModal open={openModal}/></>) : (<></>)
                 }
                
              
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
        height: '45%',
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



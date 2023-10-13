import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendario';

export default function Resultados() {

    return (
        <View >
<Text style={styles.text}>Marcar resultados diarios</Text>
<Calendar
  onChange={(range) => console.log(range)}
  style={{        width : 100  }}
  minDate={new Date(2018, 3, 20)}
  startDate={new Date(2018, 3, 30)}
  endDate={new Date(2018, 4, 5)}
  theme={{
    activeDayColor: {},
    monthTitleTextStyle: {
      color: 'black',
      fontWeight: '300',
      fontSize: 16,
    },
    emptyMonthContainerStyle: {},
    emptyMonthTextStyle: {
      fontWeight: '200',
    },
    weekColumnsContainerStyle: {},
    weekColumnStyle: {
      paddingVertical: 10,
    },
    weekColumnTextStyle: {
      color: 'black',
      fontSize: 13,
    },
    nonTouchableDayContainerStyle: {},
    nonTouchableDayTextStyle: {},
    startDateContainerStyle: {},
    endDateContainerStyle: {},
    dayContainerStyle: {},
    dayTextStyle: {
      color: 'black',
      fontWeight: '200',
      fontSize: 15,
    },
    dayOutOfRangeContainerStyle: {},
    dayOutOfRangeTextStyle: {},
    todayContainerStyle: {},
    todayTextStyle: {
      color: 'black',
    },
    activeDayContainerStyle: {
      backgroundColor: 'black',
    },
    activeDayTextStyle: {
      color: 'black',
    },
    nonTouchableLastMonthDayTextStyle: {},
  }}
/>
        </View>
    );
}
const styles = StyleSheet.create({
    
    text: {
        color: '#D8DBE2',
        fontSize: 30,

    },
    cadastro: {
        color: 'black',
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



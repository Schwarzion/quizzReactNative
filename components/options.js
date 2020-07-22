import { Button, ButtonGroup, StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';


export default function Options(props) {
    const [level, setLevel] = useState('1')
    const [theme, setTheme] = useState('all')
    const [vibrate, setVibration] = useState('No Vibrations')

    const changeLevel = () => {
        setLevel('2')
        console.log(level);
    }

    const changeTheme = () => {
        setLevel('not all')
    }

    const changeVibration = () => {
        setVibration(!vibrate)
    }

    const updateIndex = (index) => {
        console.log(index)
    }

    const buttons = ['1', '2', '3']
    const index = '1';

    return (
        <View style={styles.option}>
            <Text>Theme</Text>
            <Button title={theme} onPress={changeTheme}></Button>
            <Text>level</Text>
            <Button title={level} onPress={changeLevel}></Button>
            <Text>vibrate</Text>
            <Button title={vibrate} onPress={changeVibration}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    option: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})
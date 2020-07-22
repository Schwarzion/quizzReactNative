import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { render } from 'react-dom';

export default function Question(props) {
    return (
        <View style={styles.container}>
            <Text>{props.questionToAsk.msg}</Text>
            <Button title="Vrai"></Button>
            <Button title="Faux"></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        button: {
            flexDirection: "row"
        }
    }
})
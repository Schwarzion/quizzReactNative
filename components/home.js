import { StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';


export default function Home({ navigation }) {

    let options = {'level': '1', 'theme': 'all'}

    return (
        <View style={styles.container}>
            <Button title="Play" onPress={() => navigation.navigate('Game', {options: options})}></Button>
            <Button title="Ladder" onPress={() => navigation.navigate('Ladder')}></Button>
            <Button title="Options" onPress={() => navigation.navigate('Options')}></Button>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
})
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { questions } from '../data/question'
import Question from './question'

export default class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: {},
            questions: [],
            index: 0
        }
        this.state.options = this.props.route.params.options
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ questions: questions })
        }, 500)
    }


    checkAnswer(title) {
        console.log(title)
        // if (correct)
        // {
        //     this.state.index + 1
        // }
    }

    render() {
        if (this.state.questions.length === 0) {
            return (
                <View style={styles.container}>
                    <Text>Level : {this.state.options.level}</Text>
                    <Text>Theme : {this.state.options.theme}</Text>
                    <Text>Loading Question...</Text>
                </View>
            )
        }
        else {
            let questionToAsk = this.state.questions[this.state.index]
            console.log(questionToAsk)
            return (
                <View style={styles.container}>
                    <View style={styles.container}>
                        <Text>{questionToAsk.msg}</Text>
                        <Button title="Vrai" onPress={() => { this.checkAnswer({ value }) }}></Button>
                        <Button title="Faux" onPress={() => { this.checkAnswer({ value }) }}></Button>
                    </View>
                </View>
            )
        }
    }
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
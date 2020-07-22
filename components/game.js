import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { questions } from '../data/question'
export default class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: {},
            questions: [],
            index: 0,
            score: 0,
        }
        this.state.options = this.props.route.params.options
    }

    componentDidMount() {
        var questionByTheme = questions.filter(theme => theme.theme == this.state.options.theme)
        console.log(questionByTheme)
        var questionByLevel = questionByTheme.filter(quest => quest.level == this.state.options.level)
        console.log(questionByLevel)
        setTimeout(() => {
            this.setState({ questions: questionByLevel })
        }, 2000)
    }


    addIndex() {
        this.setState({ index: this.state.index + 1 })
    }

    addScore() {
        this.setState({ score: this.state.score + 1 })
    }

    checkAnswer(res) {
        console.log(res)
        if (res === this.state.questions[this.state.index].response) {
            console.log("YES")
            this.addIndex()
            this.addScore()
        }
        else {
            console.log("Nope")
            this.addIndex()
        }
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
            if (this.state.questions[this.state.index] != undefined) {
                let questionToAsk = this.state.questions[this.state.index]
                let res1 = questionToAsk.res1
                let res2 = questionToAsk.res2
                return (
                    <View style={styles.container}>
                        <Text>Score : {this.state.score}</Text>
                        <Text>{questionToAsk.msg}</Text>
                        <Button title={questionToAsk.res1} onPress={() => { this.checkAnswer(res1) }}></Button>
                        <Button title={questionToAsk.res2} onPress={() => { this.checkAnswer(res2) }}></Button>
                    </View>
                )
            }
            else {
                return (
                    <View style={styles.container}>
                        <Text>Score : {this.state.score} / {this.state.questions.length}</Text>
                    </View>
                )
            }
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
})
import React, { Component } from 'react'
import { View, Animated, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Feedback extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.content}>
                        <Text>All done!</Text>
                        <Text>You have completed all your tasks for today. Great job!</Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text>Ok, thanks!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    content: {
        padding: 50
    },
    card: {
        backgroundColor: '#1921DC',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        width: '100%',
        height: 400,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#0E1C94',
        width: '100%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Feedback
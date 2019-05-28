import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated, Dimensions } from 'react-native'
import PropTypes from 'prop-types'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

class Popup extends Component {
    state = {
        positionView: new Animated.Value(HEIGHT),
        opacity: new Animated.Value(0),
        positionPopup: new Animated.Value(HEIGHT)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.Visible){
            this.start()
        }else{
            this.hide()
        }

        return false
    }

    start(){
        Animated.sequence([
            Animated.timing(this.state.positionView, {
                toValue: 0,
                duration: 100
            }),
            Animated.timing(this.state.opacity, {
                toValue: 1,
                duration: 300
            }),
            Animated.spring(this.state.positionPopup, {
                toValue: HEIGHT / 3,
                bounciness: 15,
                useNativeDriver: true
            })
        ]).start()

        if(this.props.AutoClose){
            setTimeout(() => {
                this.hide()
            }, this.props.Timing)
        }

    }

    hide(){
        Animated.sequence([
            Animated.timing(this.state.positionPopup, {
                toValue: HEIGHT,
                duration: 250,
                useNativeDriver: true
            }),
            Animated.timing(this.state.opacity, {
                toValue: 0,
                duration: 300
            }),
            Animated.timing(this.state.positionView, {
                toValue: HEIGHT,
                duration: 100
            })
        ]).start()
    }


    handleImage(props){
        switch(props.Type){
            case 'Success':
                return require('../assets/Success.png')
                break
            case 'Error':
                return require('../assets/Error.png')
                break
            case 'Warning':
                return require('../assets/Warning.png')
                break
        }
    }

    render(){
        const { Title, Type, TextBody, Button, ButtonText, Callback, Background } = this.props

        return(
            <Animated.View 
                ref={c => this._root = c}
                style={[styles.Container, {
                    backgroundColor: Background,
                    opacity: this.state.opacity,
                    transform: [
                        { translateY: this.state.positionView }
                    ]
                }]}>
                <Animated.View style={[styles.Message, {
                    transform: [
                        { translateY: this.state.positionPopup }
                    ] 
                }]}>
                    <View style={styles.Header} />

                    <Image 
                        source={this.handleImage({Type})}
                        resizeMode="contain"
                        style={styles.Image}
                    />

                    <View style={styles.Content}>
                        <Text style={styles.Title}>{ Title }</Text>
                        <Text style={styles.Desc}>{ TextBody }</Text>
                        {
                            Button && 
                            <TouchableOpacity style={[styles.Button, styles[Type]]} onPress={Callback}>
                                <Text style={styles.TextButton}>{ ButtonText }</Text>
                            </TouchableOpacity>
                        }
                    </View>
                </Animated.View>
            </Animated.View>
        )
    }
}


Popup.defaultProps = {
    Title: 'Upload complete',
    Type: 'Success',
    TextBody: 'Congrats! Your upload successfully done',
    Button: true,
    ButtonText: 'Ok',
    Callback: () => alert('Callback props'),
    Background: 'rgba(0, 0, 0, 0.5)',
    Visible: false,
    Timing: 5000,
    AutoClose: false
}

Popup.propTypes = {
    Title: PropTypes.string,
    Type: PropTypes.oneOf(['Success', 'Error', 'Warning']),
    TextBody: PropTypes.string,
    Button: PropTypes.bool,
    ButtonText: PropTypes.string,
    Callback: PropTypes.func,
    Background: PropTypes.string,
    Visible: PropTypes.bool,
    Timing: PropTypes.number,
    AutoClose: PropTypes.bool
}

const styles = StyleSheet.create({
    Container: {
        position: 'absolute',
        zIndex: 9,
        width: WIDTH,
        height: HEIGHT,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        top: 0,
        left: 0
    },  
    Message: {
        maxWidth: 300,
        width: 230,
        height: 300,
        backgroundColor: '#fff',
        borderRadius: 30,
        alignItems: 'center',
        overflow: 'hidden',
        position: 'absolute',
    },
    Content: {
        padding: 20,
        alignItems: 'center'
    },  
    Header: {
        height: 230,
        width: 230,
        backgroundColor: '#FBFBFB',
        borderRadius: 100,
        marginTop: -120
    },
    Image: {
        width: 150, 
        height: 80, 
        position: 'absolute', 
        top: 20
    },
    Title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#333'
    },
    Desc: {
        textAlign: 'center',
        color: '#666',
        marginTop: 10
    },
    Button: {
        borderRadius: 50,
        height: 40,
        width: 130,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    TextButton: {
        color: '#fff',
        fontWeight: 'bold'
    },
    Success: {
        backgroundColor: '#AAF577',
        shadowColor: "#AAF577",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11
    },
    Error: {
        backgroundColor: '#F29091',
        shadowColor: "#F29091",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11
    },
    Warning: {
        backgroundColor: '#fbd10d',
        shadowColor: "#fbd10d",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11
    }
})



export default Popup
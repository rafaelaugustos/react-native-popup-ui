import React, { Component } from 'react'
import { View, Animated, Text, StyleSheet, Image, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

class Feedback extends Component {
    static popupInstance

    static show({ ...config }) {
		this.popupInstance.start(config)
    }
    
    static hide() {
		this.popupInstance.hidePopup()
    }
    
    state = {
        toast: new Animated.Value(height)
    }

    start({ ...config }){
        Animated.spring(this.state.toast, {
            toValue: height - 130,
            bounciness: 15,
            useNativeDriver: true
        }).start()
    }

    
    componentDidMount(){
        setTimeout(() => {
            this.start()
        }, 3000)
    }

    render(){
        return(
            <Animated.View 
                style={[styles.toast, {
                    transform: [
                        { translateY: this.state.toast }
                    ]
                }]}
            >
                <View style={styles.timing} />
                <View style={styles.content}>
                    <Text style={styles.title}>Conexão restabelecida</Text>
                    <Text style={styles.subtitle}>YAY! Sua conexão foi reestabelecida, agora você pode sincronizar suas informações.</Text>
                </View>

                <View style={styles.iconStatus}>
                    <Image
                        source={require('./tick.png')}
                        style={styles.img}
                    />
                </View>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    toast: {
        position: 'absolute',
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        minHeight: 90,
        shadowColor: "#ccc",
        borderWidth: 1,
        borderColor: '#f5f5f5',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row'
    },
    timing: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 2,
        width: '100%',
        backgroundColor: '#55F89B',
        position: 'absolute',
        top: 0
    },  
    content: {
        width: '90%',
        paddingLeft: 20,
        paddingRight: 20
    },  
    title: {
        color: '#55F89B',
        fontWeight: '600',
        fontSize: 16
    },
    subtitle: {
        marginTop: 5,
        fontWeight: '300',
        fontSize: 13
    },
    img: {
        resizeMode: 'contain',
        width: 20,
        height: 20
    },
    iconStatus: {
        width: 40,
        height: 40,
        backgroundColor: '#55F89B',
        borderRadius: 50,
        position: 'absolute',
        right: -20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Feedback
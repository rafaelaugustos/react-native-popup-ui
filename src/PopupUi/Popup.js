import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet , Image } from 'react-native'
import PropTypes from 'prop-types'
//import { returnStatusImage } from './func'

const Popup = (props) => {
    const { Title, Type, TextBody, ButtonText } = props
    
    return(
        <View style={styles.Message}>
            <View style={styles.Header} />

            <Image 
                source={require('../assets/yes.png')}
                resizeMode="contain"
                style={styles.Image}
            />

            <View style={styles.Content}>
                <Text style={styles.Title}>{ Title }</Text>
                <Text style={styles.Desc}>{ TextBody }</Text>

                <TouchableOpacity style={[styles.Button, styles[Type]]}>
                    <Text style={styles.TextButton}>{ ButtonText }</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

Popup.defaultProps = {
    Title: 'Upload complete',
    Type: 'Success',
    TextBody: 'Congrats! Your upload successfully done',
    ButtonText: 'Ok'
}

Popup.propTypes = {
    Title: PropTypes.string,
    Type: PropTypes.oneOf(['Success', 'Error', 'Warning']),
    TextBody: PropTypes.string,
    ButtonText: PropTypes.string
}

const styles = StyleSheet.create({
    Message: {
        maxWidth: 300,
        width: 230,
        height: 300,
        backgroundColor: '#fff',
        borderRadius: 30,
        alignItems: 'center',
        overflow: 'hidden'
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
    }
})

export default Popup
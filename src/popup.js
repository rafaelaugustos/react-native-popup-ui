import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated, Dimensions } from 'react-native'
import PropTypes from 'prop-types'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Popup = (props) => {
  const { title, type, textBody, button, buttonText, callback, background, timing, autoclose, visible } = props

  const [state, setState] = useState({
    view: new Animated.Value(HEIGHT),
    opacity: new Animated.Value(0),
    popup: new Animated.Value(HEIGHT)
  })

  const start = () => {
    Animated.sequence([
      Animated.timing(state.view, {
        toValue: 0,
        duration: 100
      }),
      Animated.timing(state.opacity, {
        toValue: 1,
        duration: 300
      }),
      Animated.spring(state.popup, {
        toValue: HEIGHT / 3,
        bounciness: 15,
        useNativeDriver: true
      })
    ]).start()

    if(autoclose){
      setTimeout(() => {
        hide()
      }, timing)
    }
  }

  const hide = () => {
    Animated.sequence([
      Animated.timing(state.popup, {
        toValue: HEIGHT,
        duration: 250,
        useNativeDriver: true
      }),
      Animated.timing(state.opacity, {
        toValue: 0,
        duration: 300
      }),
      Animated.timing(state.view, {
        toValue: HEIGHT,
        duration: 100
      })
    ]).start()
  }

  const handleImage = (prop) => {
    switch(prop){
      case 'Success':
        return require('./assets/Success.png')
        break
      case 'Error':
        return require('./assets/Error.png')
        break
      case 'Warning':
        return require('./assets/Warning.png')
        break
    }
  }

  useEffect(() => {
    if(visible){
      start()
    }else{
      hide()
    }
  }, [props])
  
  return(
    <Animated.View
      style={[styles.Container, {
        backgroundColor: background,
        opacity: state.opacity,
        transform: [
          { translateY: state.view }
        ]
      }]}
    >
      <Animated.View 
        style={[styles.Message, {
          transform: [
            { translateY: state.popup }
          ] 
        }]}
      >
        <View style={styles.Header} />

        <Image 
          source={handleImage(type)}
          resizeMode="contain"
          style={styles.Image}
        />

        <View style={styles.Content}>
          <Text style={styles.Title}>{ title }</Text>
          <Text style={styles.Desc}>{ textBody }</Text>
          {
            button && 
            <TouchableOpacity style={[styles.Button, styles[type]]} onPress={callback}>
              <Text style={styles.TextButton}>{ buttonText }</Text>
            </TouchableOpacity>
          }
        </View>
      </Animated.View>
    </Animated.View>
  )
}

Popup.defaultProps = {
  title: 'Upload complete',
  type: 'Success',
  textBody: 'Congrats! Your upload successfully done',
  button: true,
  buttonText: 'Ok',
  callback: () => alert('Callback props'),
  background: 'rgba(0, 0, 0, 0.5)',
  visible: false,
  timing: 5000,
  autoClose: false
}

Popup.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['Success', 'Error', 'Warning']),
  textBody: PropTypes.string,
  button: PropTypes.bool,
  buttonText: PropTypes.string,
  callback: PropTypes.func,
  background: PropTypes.string,
  visible: PropTypes.bool,
  timing: PropTypes.number,
  autoClose: PropTypes.bool
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
    position: 'absolute'
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
      height: 5
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
      height: 5
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
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11
  }
})

export default Popup
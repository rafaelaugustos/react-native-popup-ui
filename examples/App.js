import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Popup } from 'popup-ui'

class App extends Component {
  state = {
    visible: false,
    type: 'Success',
    title: 'Upload complete',
    textbody: 'Congrats! Your upload successfully done',
    buttontext: 'Ok',
    callback: () => this.closePopup()
  }

  handlePopup = (props) => {
    this.setState({ 
      visible: true,
      ...props
    })
  }

  closePopup = () => {
    this.setState({ visible: false })
  }

  render(){
    const { visible, type, title, textbody, buttontext, callback } = this.state
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => this.handlePopup({ type: 'Success', title: 'Upload complete',  textbody: 'Congrats! Your upload successfully done', buttontext: 'Ok'})}>
          <Text>Success</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.handlePopup({ type: 'Warning', title: 'Upload attention',  textbody: 'Your file is over 3MB, this may harm your application', buttontext: 'Continue'})}>
          <Text>Warning</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => this.handlePopup({ type: 'Error', title: 'Upload failed',  textbody: 'Sorry! Your upload failed, please try again', buttontext: 'Try again'})}
        >
          <Text>Erro</Text>
        </TouchableOpacity>

        <Popup 
          Visible={visible}
          Type={type}
          Title={title}
          TextBody={textbody}
          ButtonText={buttontext}
          Callback={callback}
        />
      </View>
    )
  }
}

export default App
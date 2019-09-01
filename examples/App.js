import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Root, Popup } from 'popup-ui';

class App extends Component {
  render(){    
    return(
      <Root>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity 
            onPress={() => 
              Popup.show({ 
                type: 'Success', 
                title: 'Upload complete',
                button: false,
                textBody: 'Congrats! Your upload successfully done', 
                buttontext: 'Ok',
                autoClose: true
              })
            }
          >
            <Text>Success</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => 
              Popup.show({ 
                type: 'Warning', 
                title: 'Upload attention',  
                textBody: 'Your file is over 3MB, this may harm your application', 
                buttontext: 'Continue',
                callback: () => Popup.hide()
              })
            }
          >
            <Text>Warning</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => 
              Popup.show({ 
                type: 'Danger', 
                title: 'Upload failed',  
                textBody: 'Sorry! Your upload failed, please try again', 
                buttontext: 'Try again',
                callback: () => Popup.hide()
              })
            }
          >
            <Text>Danger</Text>
          </TouchableOpacity>
        </View>
      </Root>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
// import { Popup } from 'popup-ui';
import Toast from './Toast';
import Root from './Root';
import Popup from './Popup';

class App extends Component {
  render() {
    return (
      <Root>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#3498db',
          }}>
          <TouchableOpacity
            onPress={() =>
              Toast.show({
                title: 'User created',
                text: 'Your user was successfully created, use the app now.',
                color: '#2ecc71',
                timing: 2000,
                icon: (
                  <Image
                    source={require('./assets/tick.png')}
                    style={{ width: 25, height: 25 }}
                    resizeMode="contain"
                  />
                ),
              })
            }>
            <Text>Toast Success</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Toast.show({
                title: 'User deleted',
                text:
                  'Your account has been deleted, you will no longer be able to access the app.',
                color: '#e74c3c',
                timing: 2000,
                icon: (
                  <Image
                    source={require('./assets/close.png')}
                    style={{ width: 15, height: 15 }}
                    resizeMode="contain"
                  />
                ),
              })
            }>
            <Text>Toast Error</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Toast.show({
                title: 'Profile edited',
                text:
                  'Your profile has been edited, you can now see your new information.',
                color: '#f39c12',
                timing: 2000,
                icon: (
                  <Image
                    source={require('./assets/warning.png')}
                    style={{ width: 25, height: 25 }}
                    resizeMode="contain"
                  />
                ),
              })
            }>
            <Text>Toast Warning</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Popup.show({
                type: 'Success',
                title: 'Upload complete',
                button: true,
                textBody: 'Congrats! Your upload successfully done',
                buttontext: 'Ok',
                icon: (
                  <Image
                    source={{
                      uri:
                        'https://www.acejundiai.com.br/wp-content/uploads/2018/12/success-icon-09.png',
                    }}
                    style={{ width: 50, height: 50 }}
                    resizeMode="contain"
                  />
                ),
              })
            }>
            <Text>Popup with Component Icon</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Popup.show({
                type: 'Success',
                title: 'Upload complete',
                button: false,
                textBody: 'Congrats! Your upload successfully done',
                buttontext: 'Ok',
                autoClose: true,
              })
            }>
            <Text>Popup Success</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Popup.show({
                type: 'Warning',
                title: 'Upload attention',
                textBody:
                  'Your file is over 3MB, this may harm your application',
                buttontext: 'Continue',
                callback: () => Popup.hide(),
              })
            }>
            <Text>Popup Warning</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Popup.show({
                type: 'Danger',
                title: 'Upload failed',
                textBody:
                  'Sorry! Your upload failed, please try again Sorry! Your upload failed, please try again Sorry! Your upload failed, please try again Sorry! Your upload failed, please try again Sorry! Your upload failed, please try again Sorry! Your upload failed, please try again',
                buttontext: 'Try again',
                callback: () => Popup.hide(),
              })
            }>
            <Text>Popup Danger</Text>
          </TouchableOpacity>
        </View>
      </Root>
    );
  }
}

export default App;

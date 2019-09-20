import React, { Component } from 'react'
import { View, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'

import Popup from '../Popup'
import Toast from '../Toast'


class Root extends Component {
  render() {
    return (
      <View 
        ref={c => (this._root = c)}
        style={{ flex: 1 }}
        {...this.props}
      >
        {this.props.children}
        <Popup
          ref={c => {
            if (c) Popup.popupInstance = c
          }}
        />
        
        <Toast 
          ref={c => {
            if (c) Toast.toastInstance = c
          }}
        />
      </View>
    )
  }
}

Root.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
}

export default Root
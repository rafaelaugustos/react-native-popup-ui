import {Dimensions} from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const theme = {
  colors: {
    white: '#FFFFFF',
    primary: '#2E8BC0',
    primaryLight: 'rgba(46,139,192,0.1)',
    primaryDark: '#145DA0',
    success: '#32B768',
    successLight: 'rgba(50,183,104,0.1)',
    warning: '#F89F4D',
    warningLight: 'rgba(248,159,77,0.1)',
    danger: '#FF4242',
    dangerLight: 'rgba(255,66,66,0.1)',
    darkOne: '#333333',
    darkTwo: '#555555',
    darkThree: '#777777',
    lightOne: '#F8F8F8',
    lightTwo: '#F2F2F2',
    lightThree: '#EDEDED',
    overlay: 'rgba(0,0,0,0.5)',
  },
  sizes: {
    small: 14,
    medium: 16,
    large: 18,
  },
  radius: {
    default: 4,
    medium: 8,
    large: 20,
  },
  screen: {
    width: WIDTH,
    height: HEIGHT,
  },
};

export default theme;

import React from 'react';
import {View} from 'react-native';

// Styles
import styles from './styles';

const Base: React.FunctionComponent<{children?: React.ReactNode}> = ({
  children,
}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Base;

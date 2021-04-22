import React from 'react';
import {View} from 'react-native';

// Styles
import styles from './styles';

const Overlay: React.FunctionComponent<{children?: React.ReactNode}> = ({
  children,
}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Overlay;

import {StyleSheet} from 'react-native';
import theme from '../../../theme/default';

const styles = StyleSheet.create({
  container: {
    width: theme.screen.width,
    height: theme.screen.height,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: theme.colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;

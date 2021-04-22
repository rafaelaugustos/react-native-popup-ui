import {StyleSheet} from 'react-native';
import theme from '../../../theme/default';

const styles = StyleSheet.create({
  container: {
    width: '70%',
    minHeight: 200,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.large,
    paddingHorizontal: 18,
    paddingVertical: 25,
  },
});

export default styles;

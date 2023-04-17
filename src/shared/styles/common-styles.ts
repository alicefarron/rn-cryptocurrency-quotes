import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles/styles-consts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.intensePurple,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerStyle: {
    backgroundColor: colors.nightBlue,
    height: 100,
  },
  headerTitleStyle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;

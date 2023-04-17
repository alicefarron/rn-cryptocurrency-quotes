import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    flex: 1,
  },
  buttonText: {
    color: colors.white,
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 5,
  },
});

export default styles;

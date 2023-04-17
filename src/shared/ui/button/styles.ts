import {StyleSheet} from 'react-native';
import {normalize} from '@shared/helpers';
import {colors} from '@shared/styles';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.blue,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    width: '80%',
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: normalize(11),
  },
});

export default styles;

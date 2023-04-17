import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
    backgroundColor: colors.nightBlue,
    paddingVertical: 15,
    fontWeight: 'bold',
    borderRadius: 10,
  },
  headerCell: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
    backgroundColor: colors.nightBlue,
    paddingVertical: 15,
    marginVertical: 15,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  cell: {
    flex: 1,
    padding: 10,
  },
  cellText: {
    color: colors.white,
  },
  headerCellText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;

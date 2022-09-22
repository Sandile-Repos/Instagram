import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {width: '30%', aspectRatio: 1, borderRadius: 100},
  textButton: {
    color: colors.primary,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,
    margin: 10,
  },
  textButtonDanger: {
    color: colors.error,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,
    margin: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    // paddingVertical: 10,
  },
  label: {
    width: 75,
  },
  input: {
    borderBottomWidth: 1,
    minHeight: 50,
  },
});

export default styles;

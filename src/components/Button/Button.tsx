import {StyleSheet, Text, Pressable, PressableProps} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

interface IButton extends PressableProps {
  //PressableProps - to able to receive any property a pressable could receive, the common pressable properties
  text?: string;
  onPress?: () => void;
  inline?: boolean;
}

const Button = ({
  text = '',
  onPress = () => {},
  inline = false,
  ...restProps // contains all other properties accept the ones defined above
}: IButton) => {
  return (
    <Pressable
      {...restProps} // destructure the properties
      onPress={onPress}
      style={[
        styles.container,
        inline ? {flex: 1} : {},
        restProps.disabled ? {backgroundColor: 'lightgrey', opacity: 0.6} : {},
      ]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',

    margin: 5,
  },
  text: {
    color: colors.black,
    fontWeight: fonts.weight.semi,
  },
});

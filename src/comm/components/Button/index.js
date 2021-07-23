import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Text from '../Text';

const Button = (props) => {
  const {
    children, txtStyle, style, onPress,
  } = props;
  return (
    <TouchableOpacity onPress={() => onPress && onPress()} style={[styles.btnContainer, style]}>
      <Text style={[styles.txt, txtStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    height: 44,
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  txt: {
    fontSize: 16,
    color: '#ffffff',
  },
});

export default Button;

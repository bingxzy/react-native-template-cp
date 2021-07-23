import React from 'react';
import { StyleSheet, View } from 'react-native';
import { withTheme } from '../../../../theme';
import { Text } from '../../../../comm/components';

const TodoItem = ({ item: data, theme }) => {
  const { title, completed } = data;
  const actDot = completed ? { backgroundColor: theme.color.primary } : {};
  return (
    <View style={styles.container}>
      <View style={[styles.dot, actDot]} />
      <Text style={styles.txt}>{title}</Text>
    </View>
  );
};

export default withTheme(TodoItem);

const styles = StyleSheet.create({
  container: {
    minHeight: 44,
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 5,
  },
  txt: {
    flex: 1,
    paddingLeft: 5,
    color: '#000000',
    fontSize: 20,
  },
  dot: {
    width: 20,
    height: 20,
    backgroundColor: '#dbdede',
    borderRadius: 10,
  },

});

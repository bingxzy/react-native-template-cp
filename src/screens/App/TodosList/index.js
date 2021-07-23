import React, { useEffect, useState } from 'react';
import {
  FlatList, StyleSheet, View,
} from 'react-native';
import TodoItem from './components/TodoItem';
import service from './service';

const TodosListScreen = () => {
  const [todosList, setTodosList] = useState([]);

  useEffect(() => {
    service.getTodosListData().then((data) => {
      setTodosList(data);
    });
  }, []);

  const listRender = () => (
    <FlatList
      data={todosList}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={({ highlighted }) => (
        <View style={[styles.separator, highlighted && { marginLeft: 0 }]} />
      )}
      renderItem={({ item }) => <TodoItem item={item} />}
      keyExtractor={(item) => item.id + new Date().toString()}
      style={styles.container}
    />
  );
  return (
    <>
      {listRender()}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafbfc',
    paddingHorizontal: 15,
  },
  separator: {
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderColor: '#d8d8d8',
  },
});

export default TodosListScreen;

import React, { useEffect } from 'react';
import {
  FlatList, StyleSheet, View,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoItem from '../TodosList/components/TodoItem';
import ReduxActions from '../../../stores/actions';

const TodosListReduxScreen = ({ todosList, fetchTodos }) => {
  useEffect(() => {
    fetchTodos();
    return () => {

    };
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

const mapStateToProps = (state) => ({
  todosList: state.todos.data || [],
});
const mapDispatchToProps = (dispatch) => bindActionCreators(ReduxActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodosListReduxScreen);

import React, { Component } from 'react';
import {
  FlatList, StyleSheet, ScrollView, View,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoItem from '../TodosList/components/TodoItem';
import ReduxActions from '../../../stores/actions';

class TodosListReduxScreen extends Component {
  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos();
  }

  listRender = () => {
    const { todosList } = this.props;
    return (
      <FlatList
        data={todosList}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={({ highlighted }) => (
          <View style={[styles.separator, highlighted && { marginLeft: 0 }]} />
        )}
        renderItem={({ item }) => <TodoItem item={item} />}
        keyExtractor={(item) => item.id + new Date().toString()}
      />
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.listRender()}
      </ScrollView>
    );
  }
}

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

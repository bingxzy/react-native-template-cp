import React, { Component } from 'react';
import {
  FlatList, StyleSheet, ScrollView, View,
} from 'react-native';
import TodoItem from './components/TodoItem';
import service from './service';


class TodosListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todosList: [],
    };
  }

  componentDidMount() {
    service.getTodosListData(this);
  }


  listRender = () => {
    const { todosList } = this.state;
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

export default TodosListScreen;

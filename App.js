import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  const [toDoList, settoDoList] = useState([]);
  const [counter, setCounter] = useState(toDoList.length);
  const [todoItem, setTodoItem] = useState('');
  const rendertoDo = ({item}) => (
    <TouchableOpacity>{item.title}</TouchableOpacity>
  );

  useEffect(() => {
    settoDoList(toDoList);
  }, []);

  function addToCart(title) {
    if (!title) {
      return;
    }
    settoDoList([
      ...toDoList,
      {id: toDoList.length, title: title, isDone: false},
    ]);
  }
  useEffect(() => {
    const counter = toDoList.filter((item) => item.isDone !== true);
    setCounter(counter.length);
  }, [toDoList]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}> 
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#ff9e80'}}>
            TODO
          </Text>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#ff9e80'}}>
            {counter}
          </Text>
        </View>
        <FlatList
          testID="list"
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              There is nothing to do, you can lie down..
            </Text>
          }
          keyExtractor={(item, index) => index.toString()}
          data={toDoList}
          renderItem={rendertoDo}
        />
        
        <View>
          <TextInput
            testID="input"
            placeholder= "What are we doing today?"
            placeholderTextColor="#f5f5f5"
            onChangeText={(todo) => setTodoItem(todo)}></TextInput>
          <TouchableOpacity testID="button" onPress={() => addToCart(todoItem)}>Ekle</TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  emptyText: {
    alignSelf: 'center',
    color: 'gray',
    fontSize: 20,
  },
});

export default App;
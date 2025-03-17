import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from '../commonet/Header';
import TodoItem from '../commonet/TodoItem';

export default function Todo() {
  const [todo,setTodo] = React.useState([
    {id:1,text:"React is soo cool!"},
    {id:2,text:"IceLink is soo cool!"},
    {id:3,text:"I am a genius!"},
  ]);


  return (
    <View style={styles.container}>
      <Header/>
      <FlatList
        data={todo}
        keyExtractor={item =>item.id}
        renderItem={({item})=>(<TodoItem id={item.id} text={item.text} />)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})
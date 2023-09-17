import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';


export default function ListScreen() {
    
    const friends = [
        {name: "Friend 1", age: 40},
        {name: "Friend 2", age: 50},
        {name: "Friend 3", age: 32},
        {name: "Friend 4", age: 27},
        {name: "Friend 5", age: 30},
        {name: "Friend 6", age: 53},
        {name: "Friend 7", age: 33}
    ]

  return ( 
  <FlatList
    data={friends}
    renderItem={({item}) => {
        return <Text style={styles.textStyle} keyExtractor={friend => friend.name}>{item.name} - {item.age}</Text>
    }}
    />
  )
    
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        fontSize: 40
    }
})

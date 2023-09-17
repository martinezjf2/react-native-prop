import React from 'react';
import { Text, StyleSheet, View } from 'react-native'




export default function ComponentsScreen() {
    const name = 'Jeffrey'
    return <View>
        <Text style={styles.heading}>Getting Started with React Native!</Text>
        <Text style={styles.subHeading}>My Name is {name}</Text>
    </View>
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 45
    },
    subHeading: {
        fontSize: 20
    }
})

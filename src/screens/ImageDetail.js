import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'


export default function ImageDetail({title, img, score}) {
    return (
        <View>
            <Image source={img} />
            <Text>{title}</Text>
            <Text>Image Score - {score}</Text>
        </View>
    )
}

const style = StyleSheet.create({})
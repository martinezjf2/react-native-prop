import React from 'react';
import ImageDetail from './ImageDetail'
import { View, Text, StyleSheet } from 'react-native'


export default function ImageScreen() {
    return (
        <View>
            <ImageDetail title="Forest" img={require('../../assets/forest.jpg')} score="9"/>
            <ImageDetail title="Beach" img={require('../../assets/beach.jpg')} score="9"/>
            <ImageDetail title="Mountain" img={require('../../assets/mountain.jpg')} score="9"/>
        </View>
    )
}

const style = StyleSheet.create({})
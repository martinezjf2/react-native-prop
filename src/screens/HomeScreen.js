import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  // console.log(props.navigation)
  return (
    <View>
      <Text style={styles.text}>Welcome!</Text>
      <Button 
        title="Go to Components Demo" 
        onPress={() => props.navigation.navigate("Components")}
        />
      <Button 
        title="Go to List Screen"
        onPress={() => props.navigation.navigate("List")}
      />

      <TouchableOpacity onPress={() => console.log("Touchable Button Pressed")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>

    </View>
 
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

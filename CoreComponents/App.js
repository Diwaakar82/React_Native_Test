import { View, Text, Image, Button, StyleSheet, Alert } from "react-native"
import { useState } from "react";
import Greet from "./Components/Greet";
const logoImage = require("./assets/adaptive-icon.png")

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return <View style={styles.container}>
    <Button title="Button" onPress={ () => Alert.alert("Error", "404") } backgroundColor="cyan" />
    <Greet name="Tony Stark" />
    <Greet name="Bruce banner" />
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "plum", 
    padding: 50
  },
  title: {
    // fontWeight: "bold"
  }
});
import { View, Text, StyleSheet } from "react-native"

export default function Greet({ name }) {
    return (
        <View>
            <Text style={[styles.title, styles.box]} >Hi {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: "plum", 
      padding: 50
    },
    title: {
      fontWeight: "bold"
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: "white",
        borderWidth: 4,
        borderColor: "black",
        padding: 20,
        margin: 10
      },
  });
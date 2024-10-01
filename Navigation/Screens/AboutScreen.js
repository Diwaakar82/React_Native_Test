import { View, Text, StyleSheet, Button } from "react-native";

export default function AboutScreen({ route, navigation }) {
    const { name } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Button title="Update name" onPress={() => {navigation.setParams({"name": "Not Gowtham"})}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
import { StyleSheet, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "blue", top: 75, left: 75 }}>Box 1</Box>
      <Box style={{ backgroundColor: "black", position: "absolute", top: 150, left: 150 }}>Box 2</Box>
      <Box style={{ backgroundColor: "green" }}>Box 3</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    borderWidth: 6,
    borderColor: "gray",
  },
});

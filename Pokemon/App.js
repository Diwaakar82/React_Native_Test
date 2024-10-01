import { StyleSheet, SafeAreaView, Platform, ScrollView } from 'react-native';
import PokemonCard from './Components/PokemonCard';

export default function App() {
  const charmanderData = {
    name: "Charmander",
    image: require("./assets/charmander.png"), 
    type: "Fire",
    hp: 39, 
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  const squitleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"), 
    type: "Water",
    hp: 44, 
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Grass", "Electric"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"), 
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Flying", "Ice", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"), 
    type: "Electric",
    hp: 35,
    moves: ["Tackle", "Thunder Shock", "Growl", "Tail Whip"],
    weaknesses: ["Ground"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData}></PokemonCard>
        <PokemonCard {...squitleData}></PokemonCard>
        <PokemonCard {...bulbasaurData}></PokemonCard>
        <PokemonCard {...pikachuData}></PokemonCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === "android" ? 25 : 50,
  },
});

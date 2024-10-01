import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList, SectionList } from 'react-native';
import pokemonList from './data.json';
import groupedPokemonList from './grouped-data.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
      {
        pokemonList.map(pokemon => {
          return (
            <View key={pokemon.id} style={styles.card}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          )
        })
      }
      </ScrollView> */}
      {/* <FlatList data={pokemonList} renderItem={({ item }) => {

        return (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardText}>{item.type}</Text>
            <Text style={styles.cardText}>{item.name}</Text>
          </View>
        )
      }} style={styles.scrollView}/> */}
    <SectionList 
      sections={groupedPokemonList}
      renderItem={({ item }) => {
        return (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardText}>{item}</Text>
          </View>
        )
      }}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeaderText}>{section.type}</Text>
      )} 
    />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16
  },
  cardText: {
    fontSize: 24,
  },
  sectionHeaderText: {
    backgroundColor: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }
});

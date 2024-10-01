import { View, Text, StyleSheet, Button } from 'react-native';

const DashboardScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dashboard Screen</Text>
            <Button title='Toggle' onPress={ () => navigation.jumpTo("Settings") }></Button>
        </View>
    );
};

export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16
    }
});
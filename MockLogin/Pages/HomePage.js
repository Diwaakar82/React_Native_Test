import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import FlatListCarousel from "../Components/FlatListCarousel";
import { imagePaths } from "../data";

const { width, height } = Dimensions.get('window');

export default function HomePage({ username }) {
    return (<>
    {/* //Header */}
    <View style={styles.headerView}>
        <View style={styles.textContainer}>
            <Text style={styles.headerText}>Good Afternoon,</Text>
            <Text style={styles.headerText}>{username}</Text>
        </View>
        <View style={styles.iconContainer}>
            <TouchableOpacity>
                <Icon name="home" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="home" size={30} color="black" />
            </TouchableOpacity>
        </View>
    </View>

    <ScrollView>
    {/* //Reflect */}
        <View style={{marginHorizontal: '5%'}}>
            <Text style={styles.subheading}>Reflect</Text>
            <FlatListCarousel />
        </View>

        {/* Today's Exercise */}
        <View style={[styles.section, {marginTop: '5%'}]}>
            <Text style={styles.subheading}>Today's Exercise</Text>
            <View>
                <Image
                    source={require('../assets/adaptive-icon.png')}
                    style={[styles.imageView, {height: height * 0.15, width: '100%'}]}
                />
                <Text style={styles.imageTitle}>890</Text>
                <View style={styles.imageIcon}>
                    <Text>LU</Text>
                </View>
            </View>
        </View>
        
        {/* Continue Listening */}
        <View style={styles.section}>
            <Text style={styles.subheading}>Continue Listening</Text>
            <Image 
                source={require('../assets/adaptive-icon.png')}
                style={styles.imageView}
            />
        </View>

        {/* Thought Exercises */}
        <View style={[styles.section, {marginRight: 0}]}>
            <View style={styles.sectionTitleView}>
                <Text style={styles.subheading}>Thought Exercises</Text>
                <Text style={[styles.subheading, {color: 'blue', marginRight: '5%'}]}>View All</Text>
            </View>
            <FlatList 
                horizontal 
                data={imagePaths}
                renderItem={({item}) => {
                    return (<View style={styles.exerciseView}>
                        <Image 
                            source={item.path} 
                            style={[styles.imageView]} 
                        />
                        <Text style={styles.imageSubtitle}>{item.title}</Text>
                        <Text numberOfLines={2}>{item.description}</Text>
                    </View>);}
                }
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
            />
        </View>

        {/* Collections */}
        <View style={styles.section}>
            <Text style={styles.subheading}>Collections</Text>
        </View>

        {/* Series */}
        <View style={styles.section}>
            <Text style={styles.subheading}>Series</Text>
        </View>

        {/* My Favorites */}
        <View style={styles.section}>
            <Text style={styles.subheading}>My Favorites</Text>
        </View>
    </ScrollView>
</>)};

const styles = StyleSheet.create({
    headerView: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '5%',
        paddingHorizontal: '5%',
        paddingVertical: '2%',
    },
    headerText: {
        color: 'grey',
    },
    textContainer: {
        flexDirection: 'column',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    section: {
        marginHorizontal: '5%',
        marginTop: '2%',
    },
    subheading: {
        fontSize: 24,
        margin: '1%',
    },
    reflectView: {
        backgroundColor: 'white',
        alignItems: 'center',
        padding: '2%',
        borderRadius: 15,
    },
    imageView: {
        borderRadius: 25,
        width: '100%',
        height: height * 0.1,
    },
    imageIcon: {
        position: 'absolute', 
        top: '5%', 
        right: '5%', 
        backgroundColor: 'white',
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageTitle: {
        position: 'absolute',
        bottom: 0, 
        left: 0, 
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    sectionTitleView: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    exerciseView: {
        flexDirection: 'column',
        width: width * 0.5,
        marginRight: 20,
    },
    imageSubtitle: {
        fontWeight: 'bold', 
        marginTop: '2%', 
        marginBottom: '1%',
    }
});
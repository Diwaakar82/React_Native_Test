import React, { useState } from 'react';
import { View, FlatList, Dimensions, StyleSheet, Text } from 'react-native';
import { reflectData } from '../data';
import StarRating from 'react-native-star-rating-widget';

const { width } = Dimensions.get('window');

const FlatListCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [ratings, setRatings] = useState(
      reflectData.reduce((acc, item) => {
        acc[item.id] = 0;
        return acc;
      }, {})
    );
  
    const onViewableItemsChanged = ({ viewableItems }) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index);
      }
    };
  
    const viewabilityConfig = {
      viewAreaCoveragePercentThreshold: 50,
    };
  
    const handleRatingChange = (id, newRating) => {
      setRatings((prevRatings) => ({
        ...prevRatings,
        [id]: newRating,
      }));
    };
  
    const renderItem = ({ item }) => {
      return (
        <View style={styles.reflectView}>
          <Text style={{ fontWeight: 'bold' }}>{item.question}</Text>
          <StarRating
            rating={ratings[item.id]}
            onChange={(rating) => handleRatingChange(item.id, rating)}
            starSize={40}
            emptyColor="gray"
            enableHalfStar={false}
          />
        </View>
      );
    };

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={reflectData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        keyExtractor={(item) => item.id.toString()}
        snapToAlignment="center"
        decelerationRate="fast"
        snapToInterval={width * 0.9}
      />
      <View style={styles.paginationContainer}>
        <View style={styles.pagination}>
            {reflectData.map((_, index) => (
            <View
                key={index}
                style={[
                styles.paginationDot,
                currentIndex === index ? styles.activeDot : styles.inactiveDot,
                ]}
            />
            ))}
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: width,
    height: 200,
  },
  pagination: {
    flexDirection: 'row',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: -20,
    width: '100%',
    alignItems: 'center',
    marginBottom: '2%'
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: 'black',
  },
  inactiveDot: {
    backgroundColor: 'white',
  },
  reflectView: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: '2%',
    borderRadius: 15,
    width: width * 0.9,
  },
});

export default FlatListCarousel;

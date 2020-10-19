import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const Gallery = (props) => {
  let renderItem = ({item}) => {
    return (
      <View
        style={{
          padding: 5,
          flex: 1,
        }}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('Photo', {photo: item.urls.regular})
          }>
          <Image
            key={item.id}
            source={{uri: item.urls.small}}
            style={styles.image}
          />
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.username}>{item.user.username}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      style={{flex: 1}}
      data={props.photos}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      onEndReached={() => {
        props.addPhotos(props.page);
      }}
      onEndReachedThreshold={0.2}
      refreshing={false}
      showsVerticalScrollIndicator={false}></FlatList>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  descriptionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 5,
    padding: 5,
  },
  image: {
    height: 150,
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 10,
  },

  description: {
    fontSize: 10,
    fontStyle: 'italic',
  },
});

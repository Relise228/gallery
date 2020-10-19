import * as React from 'react';
import {View, Image} from 'react-native';

const PhotoScreen = ({route}) => {
  console.log(route.params.photo);
  const photoLink = route.params.photo;
  return (
    <View style={{flex: 1}}>
      <Image
        source={{uri: photoLink}}
        style={{flex: 1, width: null, height: null}}
        resizeMode="cover"
      />
    </View>
  );
};

export default PhotoScreen;

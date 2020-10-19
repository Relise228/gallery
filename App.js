/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import PhotoScreen from './components/presentational/PhotoScreen';
import GalleryContainer from './components/container/GalleryContainer';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen
              name="Gallery"
              component={GalleryContainer}
              options={{title: 'Gallery'}}
            />
            <Stack.Screen
              name="Photo"
              component={PhotoScreen}
              options={{title: 'Photo'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;

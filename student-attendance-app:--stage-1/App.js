import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// You can import from local files
import HomeScreen from './screens/HomeScreen';
import SubmitScreen from './screens/SubmitScreen';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SubmitScreen: SubmitScreen,
});

const AppContainer = createAppContainer(AppNavigator);

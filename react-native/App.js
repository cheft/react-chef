import React from 'react';
import { View, StatusBar, StyleSheet, Platform } from 'react-native';
import { StackNavigator} from 'react-navigation';
import Main from './pages/main'
import Profile from './pages/profile'

const AppNavigator = StackNavigator({
  Main: {screen: Main},
  Profile: {screen: Profile},
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={'#202930'} />
        <AppNavigator />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
});
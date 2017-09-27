import React from 'react';
import { View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import List from './pages/list';
import Detail from './pages/detail';
import { useStrict } from 'mobx';

useStrict(true);

const AppNavigator = StackNavigator({
  List: { screen: List },
  Detail: { screen: Detail },
});

export default function () {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#202930'}
      />
      <AppNavigator />
    </View>
  );
}

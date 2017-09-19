import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import CounterUI from './pages/counter';

export default function () {
  return (
    <View style={styles.container}>
      <CounterUI />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

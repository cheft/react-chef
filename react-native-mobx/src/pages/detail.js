import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { observer } from 'mobx-react/native';

import DetailStore from '../stores/detail';

@observer
export default class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
    headerStyle: {
      backgroundColor: 'transparent',
      position: 'absolute',
      height: 50,
      top: 0,
      left: 0,
      right: 0,
    },
  });

  componentDidMount() {
    const id = this.props.navigation.state.params.id;
    this.store.loadDetail(id);
  }

  store = new DetailStore();

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: this.store.detail.livingRoomPictrue }}
        />

        <Text>{this.store.detail.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 280,
    width: '100%',
  },
});

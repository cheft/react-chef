import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
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
    paddingTop: 50,
    marginLeft: 10,
  },
  image: {
    width: 135,
    height: 100,
    overflow: 'visible',
  },
  intro: {
    paddingLeft: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#333333',
  },
  region: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#333333',
  },
  number: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  size: {
  },
  price: {
    color: '#ff8102',
    fontSize: 18,
    fontWeight: 'bold',
  },

  labels: {
    flexDirection: 'row',
    height: 22,
  },

  label: {
    paddingVertical: 4,
    paddingLeft: 4,
    paddingRight: 3,
    fontSize: 11,
    marginRight: 5,

    borderWidth: 1,
  },
  label0: {
    color: '#5792ca',
    borderColor: '#5792ca',
  },
  label1: {
    color: '#ff8102',
    borderColor: '#ff8102',
  },
  label2: {
    color: '#69ae00',
    borderColor: '#69ae00',
  },
});

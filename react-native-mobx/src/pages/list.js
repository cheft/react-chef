import React, { Component } from 'react';
import { View, Button, FlatList, Text, Image, StyleSheet } from 'react-native';
import { observer } from 'mobx-react/native';

import navigator from '../utils/navigator';
import ListStore from '../stores/list';

@observer
export default class Profile extends Component {
  static navigationOptions = {
    title: '深圳最新二手房,房价多少 - 深圳Q房网',
    headerStyle: {
      backgroundColor: 'transparent',
      position: 'absolute',
      height: 50,
      top: 0,
      left: 0,
      right: 0,
    },
  };

  componentDidMount() {
    this.store.loadList();
  }

  store = new ListStore();

  render() {
    return (
      <View style={styles.container}>
        {/* <Button title="跳转到 Detail 页面" onPress={() => navigator.goPage(this, 'Detail')} /> */}
        <FlatList
          data={this.store.list}
          renderItem={({ item }) => (
            <View>
              <Image
                style={styles.image}
                source={{ uri: item.livingRoomPictrue }}
              />

              <Text onPress={() => navigator.goPage(this, 'Detail', { id: item.id, title: item.title })}>{item.title}</Text>
            </View>
          )}
          style={styles.list}
        />
        <Button style={styles.loadBtn} title="加载更多" onPress={this.store.loadMoreList} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 34,
  },
  image: {
    width: 135,
    height: 100,
    overflow: 'visible',
  },
  list: {

  },
  loadBtn: {

  },
});

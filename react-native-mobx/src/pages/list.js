import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { observer } from 'mobx-react/native';
import UltimateListView from 'react-native-ultimate-listview';

import navigator from '../utils/navigator';
import ListStore from '../stores/list';

@observer
export default class List extends Component {
  static navigationOptions = {
    title: '深圳最新二手房,房价多少 - 深圳Q房网',
    headerTitleStyle: {
      color: '#fabe00',
    },

    headerStyle: {
      backgroundColor: '#1c1c1c',
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

  renderItem(item) {
    return (
      <TouchableOpacity onPress={() => navigator.goPage(this, 'Detail', { id: item.id, title: item.title })}>
        <View style={styles.item}>
          <Image
            style={styles.image}
            source={{ uri: item.livingRoomPictrue }}
          />
          <View style={styles.intro}>
            <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.region} numberOfLines={1}>
              {item.garden.region && item.garden.region.parent ? item.garden.region.parent.name : ''}
              {item.garden.region ? item.garden.region.name : ''} {item.garden.name || ''}
            </Text>
            <View style={styles.number}>
              <Text style={styles.size}>{item.bedRoom}室{item.livingRoom}厅 {item.area}㎡</Text>
              <Text><Text style={styles.price}>{item.price / 10000} </Text>万</Text>
            </View>
            <View style={styles.labels}>{item.labelDesc ?
              [].slice.call(item.labelDesc.split('|') || [], 0, 3).map(
                (label, idx) => <Text key={idx} style={[styles.label, styles[`label${idx}`]]}>{label}</Text>,
              ) : <Text />}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <UltimateListView
          keyExtractor={(item, index) => `${index} - ${item}`}
          onFetch={this.store.onFetch}
          item={(item) => this.renderItem(item)}
          waitingSpinnerText="加载中..."
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    marginLeft: 10,
  },
  item: {
    paddingRight: 10,
    paddingVertical: 15,
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1,

    flexDirection: 'row',
    justifyContent: 'space-between',
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

import React from 'react';
import { View, Button } from 'react-native';

// 解决快速点击按钮多次导航的问题
let debounce;

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    headerStyle: {
      backgroundColor: 'transparent',
      position: 'absolute',
      height: 50,
      top: 0,
      left: 0,
      right: 0,
    },
  };

  goProfile() {
    const { navigate } = this.props.navigation;
    let func = () => {
      console.log(debounce, 333);
      if (debounce) {
        return;
      }
      navigate('Profile', { name: 'Cheft' });
      debounce = setTimeout(() => {
        debounce = 0;
      }, 1000);
    };
    return func();
  }
  
  render() {
    return (
      <View style={{paddingTop: 50}}>
        <Button title="跳转到 Profile 页面" onPress={this.goProfile.bind(this)}/>
      </View>
    );
  }
};

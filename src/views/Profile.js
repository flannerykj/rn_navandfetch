import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  AsyncStorage
} from 'react-native';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      username: 'Undefined'
    })
  }
  componentWillMount() {
    AsyncStorage.getItem('username').then((value) => {
        this.setState({username: value});
    })
  }
  render() {
    return (
      <View>
        <Text style={{marginTop: 20}}>
          Welcome, {this.state.username}!
        </Text>
      </View>
    );
  }
}

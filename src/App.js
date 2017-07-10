import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import {Provider} from 'react-redux';
import store from './store'
import MasterNavigation from './nav/MasterNavigation'

export default class bookapp extends Component {
  render() {
    return (
      <Provider store={store}>
        <MasterNavigation />
      </Provider>
    );
  }
}

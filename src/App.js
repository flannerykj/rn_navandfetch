import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import {Provider} from 'react-redux';
import store from './store'
import TabBarNavigation from './nav/TabBarNavigation'

export default class bookapp extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabBarNavigation />
      </Provider>
    );
  }
}

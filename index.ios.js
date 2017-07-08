/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store'
import TabBarNavigation from './src/nav/TabBarNavigation'

export default class bookapp extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabBarNavigation />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('uafrontend', () => bookapp);

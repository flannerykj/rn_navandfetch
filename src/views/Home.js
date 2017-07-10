import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, TouchableOpacity } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('http://localhost:8000/performances/?format=json', {
         method: 'get',
         headers: {
           //'Authorization': 'Basic '+btoa('username:password'),
           //'Content-Type': 'application/x-www-form-urlencoded'
         }
       })
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.id}, {rowData.audience}</Text>}
        />
        <TouchableOpacity
          onPress={ () => {
            this.props.navigation.navigate('BookDetail');
          }}
          style={{
            padding:20,
            borderRadius:20,
            borderWidth: 2,
            borderColor:'green',
            marginTop:20
          }}>
          <Text>{'Book Detail'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//version of Home with Redux. Not in use.

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {fetchPosts} from '../actions'
import {connect} from 'react-redux'

import BookList from '../components/BookList'

class HomeTabMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  componentWillMount() {
    this.props.fetchPosts()
  }
  render() {

    return (
      <View>
        <Text style={{marginTop: 20}}>
          Home Tab - Main
        </Text>
        <TouchableOpacity
          onPress={ () => this.props.navigator.navigate('BookDetailView') }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'green',
            marginTop:20
          }}>
          <Text>{'Go to next screen this tab'}</Text>
        </TouchableOpacity>
        <BookList books={this.props.books}/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.app.books
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => {
      dispatch(fetchPosts())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeTabMain)

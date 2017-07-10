import React, { Component } from 'react';
import {
  ActivityIndicator,
  ListView,
  Text,
  View,
  AlertIOS,
  AsyncStorage,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Form from 'react-native-form'
import ErrorMessage from '../components/ErrorMessage'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      dataSource: '',
      username: 'flannery',
      password: 'cheesecake',
      isError: false,
    }
  }

  _signin(username, password) {
    this.setState({isLoading: true});
    fetch("http://localhost:8000/api-token-auth/", {
      credentials: 'include',
      method: "POST",
      headers: {
        'Accept': 'application/json, application/xml, text/play, text/html, *.*',
        'Content-Type': 'application/x-www-form-urlencoded',
        //'Authentication': 'Bearer flannery:cheesecake'
      },
      body: 'username='+username+'&password='+password,
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.token) {
          this.setState({
            isLoading: false,
          })
          try {
            AsyncStorage.multiSet([['token', responseJson.token], ['username', username]], () => {
                this.props.navigation.navigate('Profile');
            })
          } catch(err) {
            console.log(err)
          };
        } else {
          this.setState({
            isError: true,
            isLoading: false,
          })
        }
      })
  }

  invalid_login(error) {
    console.log('error');
    this.setState({
      isError: true,
    })
  }
  componentDidMount() {
    //this._signin('flannery', 'cheesecake');

  }

    render() {
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
            <TouchableOpacity
              style={{
                padding:20,
                borderRadius:20,
                backgroundColor:'green',
                marginTop:20
              }}>
              <Text>{'Click here if not redirected....'}</Text>
            </TouchableOpacity>
          </View>
        );
      }
      if (this.state.isError) {
           errorMessage = <ErrorMessage text="Incorrect login credentials"/>
      } else {
          errorMessage = <View></View>
        }
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        {errorMessage}
        <Text>Log In</Text>
        <Form ref="login_form">
          <TextInput
            type="TextInput"
            name="username"
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({username: text})}
            value={this.state.username}/>

          <TextInput
            type="TextInput"
            name="password"
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => {
              this.setState({password: text});
              }
            }
            value={this.state.password}/>
        </Form>
        <TouchableOpacity
          onPress={ () => {
            this._signin(
              this.refs.login_form.getValues().username,
              this.refs.login_form.getValues().password
            ); //why delays? response comes when click screen.
            }
          }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'green',
            marginTop:20
          }}>
          <Text>{'Login'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ () => {
            this.props.navigation.navigate('Register');
          }}
          style={{
            padding:20,
            borderRadius:20,
            borderWidth: 2,
            borderColor:'green',
            marginTop:20
          }}>
          <Text>{'Register'}</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

import React, { Component } from 'react';
import {
  ActivityIndicator,
  ListView,
  Text,
  View,
  AlertIOS,
  AsyncStorage,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';
import Form from 'react-native-form'
import Message from '../components/Message'

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      username: '',
      password1: '',
      password2: '',
      email: '',
      isError: false,
    }
  }
  _validateForm(form_values) {
    username = form_values.username;
    email = form_values.email;
    password1 = form_values.password1;
    password2 = form_values.password2;

    if (username.length==0) {
      alert("Username field can't be empty.");
      return;
    }
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailReg.test(email)) {
      alert('Please enter a real email address.')
      return;
    }
    if (password1 != password2) {
      alert("Passwords don't match!")
      return;
    }
    this._register(username, email, password1);
  }

  _register(username, email, password) {
    this.setState({isLoading: true});
    fetch("http://localhost:8000/register/", {  //why delays? response comes when click screen.
      credentials: 'include',
      method: "POST",
      headers: {
        'Accept': 'application/json, application/xml, text/play, text/html, *.*',
        'Content-Type': 'application/x-www-form-urlencoded',
        //'Authentication': 'Bearer flannery:cheesecake'
      },
      body: 'username='+username+'&email='+email+'&password='+password,
      })
      .then((response) => {
        if (response.ok) {
          this.setState({
            isLoading: false,
          });
          this.props.navigation.goBack(message='success. login');

        } else {
          this.setState({
            isError: true,
            isLoading: false,
          })
        }
      })
  }

    render() {
      const {navigate} = this.props.navigation;
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
              <Text>{'Click here if not redirected...'}</Text>
            </TouchableOpacity>
          </View>
        );
      }
      if (this.state.isError) {
           message = <Message text="Incorrect login credentials"/>
      } else {
          message = <View></View>
        }
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        {message}
        <Text>Register</Text>
        <Form ref="registration_form">
          <TextInput
            type="TextInput"
            name="username"
            placeholder="Username"
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({username: text})}
            value={this.state.username}/>

          <TextInput
            type="TextInput"
            name="email"
            placeholder="Email Address"
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email} />

          <TextInput
            type="TextInput"
            name="password1"
            placeholder="Password"
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => {
              this.setState({password1: text});
              }
            }
            value={this.state.password1}/>
          <TextInput
            type="TextInput"
            name="password2"
            placeholder="Password (again)"
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => {
              this.setState({password2: text});
              }
            }
            value={this.state.password2}/>
        </Form>
        <TouchableOpacity
          onPress={ () => {
            this._validateForm(this.refs.registration_form.getValues() );
            }
          }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'green',
            marginTop:20
          }}>
          <Text>{'Register'}</Text>
        </TouchableOpacity>


        <Text>Already have an account?</Text>
        <Button
          onPress={() => this.props.navigation.goBack() }
          title="Log in"
        />

      </View>
    );
  }
}

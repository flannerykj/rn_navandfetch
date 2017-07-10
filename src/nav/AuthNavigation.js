'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { StackNavigator } from 'react-navigation'
// Redux
import { connect } from 'react-redux'

import Login from '../views/Login'
import Register from '../views/Register'
import Profile from '../views/ProfileView'

const routeConfiguration = {
  Login: { screen: Login },
  Profile: { screen: Profile },
  Register: {screen: Register}
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  initialRouteName: 'Login'
}

export const NavigatorAuth = StackNavigator(routeConfiguration,stackNavigatorConfiguration)

class AuthNavigation extends React.Component {
  static navigationOptions = {
    title: 'Auth Tab',
    tabBarLabel: 'Auth Tab',
  }
  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorAuth
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }
}
const mapStateToProps = (state) => {
 return {
  navigationState: state.authTab
  }
}

export default connect(mapStateToProps)(AuthNavigation)

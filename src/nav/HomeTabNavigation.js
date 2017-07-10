'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { StackNavigator } from 'react-navigation'
// Redux
import { connect } from 'react-redux'
import Home from '../views/Home'
import BookDetail from '../views/BookDetail'

import Header from '../components/Header'

const routeConfiguration = {
  Home: { screen: Home },
  BookDetail: { screen: BookDetail },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  initialRouteName: 'Home',
  headerMode: 'float'
}

export const NavigatorHomeTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)

class HomeTabNavigation extends React.Component {
  static navigationOptions = {
    title: 'Home Tab',
    tabBarLabel: 'Home Tab',
    headerMode: 'float',

  }
  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorHomeTab
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
  navigationState: state.homeTab
  }
}

export default connect(mapStateToProps)(HomeTabNavigation)

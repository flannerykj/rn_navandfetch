'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { StackNavigator } from 'react-navigation'
// Redux
import { connect } from 'react-redux'

import HomeView from '../views/HomeView'
import BookDetailView from '../views/BookDetailView'

const routeConfiguration = {
  HomeView: { screen: HomeView },
  BookDetailView: { screen: BookDetailView },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  initialRouteName: 'HomeView'
}

export const NavigatorHomeTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)

class HomeTabNavigation extends React.Component {
  static navigationOptions = {
    title: 'Home Tab',
    tabBarLabel: 'Home Tab',
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

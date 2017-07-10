import React, {Component} from 'react';
import {addNavigationHelpers} from 'react-navigation'
import {connect} from 'react-redux'
import {TabNavigator} from 'react-navigation'
import HomeTabNavigation from './HomeTabNavigation'
import ProfileTabNavigation from './ProfileTabNavigation'
import AuthNavigation from './AuthNavigation'

class TabBarNavigation extends Component {
  render() {
    const {dispatch, navigationState} = this.props
    return (
      <TabBar
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState,
          })
        }
      />
      )
    }
  }

  mapStateToProps = (state) => {
  return {
    navigationState: state.tabBar
  }
}


export default connect(mapStateToProps)(TabBarNavigation)

export const tabBarReducer = (state,action) => {
  if (action.type === 'JUMP_TO_TAB') {
    return {...state, index:0}
  } else {
    return TabBar.router.getStateForAction(action,state)
  }
}


const routeConfiguration = {
  Login: { screen: AuthNavigation },
  ProfileTabNavigation: { screen: ProfileTabNavigation },
  HomeTabNavigation: { screen: HomeTabNavigation },
}

const tabBarConfiguration = {
  //...other configs
tabBarOptions:{
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: 'white',
    inactiveTintColor: 'blue',
// background color is for the tab component
    activeBackgroundColor: 'blue',
    inactiveBackgroundColor: 'white',
  }
}
const TabBar = TabNavigator(routeConfiguration, tabBarConfiguration)

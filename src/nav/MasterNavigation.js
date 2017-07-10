'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { StackNavigator } from 'react-navigation'
// Redux
import { connect } from 'react-redux'

import AuthNavigation from './AuthNavigation'
import TabBarNavigation from './TabBarNavigation'

const routeConfiguration = {
  Auth: { screen: AuthNavigation },
  Main: { screen: TabBarNavigation },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  initialRouteName: 'Auth',
}

export const NavigatorMaster= StackNavigator(routeConfiguration,stackNavigatorConfiguration)

class MasterNavigation extends React.Component {
  static navigationOptions = {
  }

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorMaster
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
  navigationState: state.masterNav
  }
}

export default connect(mapStateToProps)(MasterNavigation)

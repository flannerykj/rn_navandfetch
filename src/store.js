import { applyMiddleware, combineReducers, createStore } from 'redux'
import {logger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers'
import {NavigatorMaster} from './nav/MasterNavigation';
import {NavigatorHomeTab} from './nav/HomeTabNavigation';
import {NavigatorProfileTab} from './nav/ProfileTabNavigation';
import {NavigatorAuth} from './nav/AuthNavigation';
import {tabBarReducer} from './nav/TabBarNavigation'

const middleware = () => {
  return applyMiddleware(logger, thunkMiddleware)
}

export default createStore(
  combineReducers({
    masterNav: (state,action) => NavigatorMaster.router.getStateForAction(action,state),
    tabBar: tabBarReducer,
    homeTab: (state,action) => NavigatorHomeTab.router.getStateForAction(action,state),
    profileTab: (state,action) => NavigatorProfileTab.router.getStateForAction(action,state),
    authTab: (state,action) => NavigatorAuth.router.getStateForAction(action,state),
    app: reducer
  }),
  middleware(),
)

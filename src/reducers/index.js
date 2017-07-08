import * as types from '../actions/types'
import { combineReducers } from 'redux'

const initialState = [
		{
			title: 'Huck Finn',
			id: 1,
			author: 'Mark Twain'
		},
		{
			title: 'Ramona the Pest',
			id: 2,
			author: 'Beverley Cleary'
		}]

const books = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        action.book
      ]
    case types.REQUEST_POSTS:
      return state
    case types.RECEIVE_POSTS:
      return action.items
    default:
      return state
  }
}

const bookApp = combineReducers({
  books: books
})

export default bookApp;

import * as types from './types';

let nextBookId = 3

export function addBook(title, author) {
  return {
    type: types.ADD_BOOK,
    book: {
      id: nextBookId++,
      title: title,
      author: author
    }
  };
}

export function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts())
    return fetch('http://localhost:8000/performances/')
      .then((response) => response.json())
      .then(json => dispatch(receivePosts(json)))
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
         // ADD THIS THROW error
          throw error;
        });
          }
        }

export function requestPosts() {
  return {
    type: types.REQUEST_POSTS
  }
}

export function receivePosts(json) {
  return {
    type: types.RECEIVE_POSTS,
    items: json,
    receivedAt: Date.now()
  }
}

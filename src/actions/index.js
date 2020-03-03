import jsonPlaceholder from '../apis/jsonPlaceholder';
// import { }

//action creators

// export const fetchPosts =  () => {
//   return async (dispatch, getState) => {
//   const response = await jsonPlaceholder.get('/posts');
  
//   dispatch({
//     type: 'FETCH_POSTS',
//     payload: response
//   });
//   }
// } refactored

export const fetchPosts =  () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  
  dispatch({
    type: 'FETCH_POSTS',
    payload: response
  });
}
export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ALL_USERS_POST = "GET_ALL_USERS_POST";
export const GET_ALL_COMMENTS_POST = "GET_ALL_COMMENTS_POST";

export function getAllPosts() {
  return;
}

export function getAllUsers() {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((users) => dispatch({ type: GET_ALL_USERS, users }));
  };
}

export function getAllUsersPost(userId) {
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((r) => r.json())
      .then((posts) => dispatch({ type: GET_ALL_USERS_POST, posts }));
  };
}

export function getAllCommentsPost(postId) {
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((r) => r.json())
      .then((comments) => dispatch({ type: GET_ALL_COMMENTS_POST, comments }));
  };
}

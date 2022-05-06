import {
    REQUEST_USERS_SUCCESS,
    REQUEST_USERS_PENDING,
    REQUEST_USERS_FAILED,
    REQUEST_USER_SUCCESS,
    REQUEST_USER_PENDING,
    REQUEST_USER_FAILED,
} from './constants';

export const requestUsers = () => (dispatch) => {
    dispatch({ type: REQUEST_USERS_PENDING });
    fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(received => dispatch({ type: REQUEST_USERS_SUCCESS, payload: received.data }))
        .catch(error => dispatch({ type: REQUEST_USERS_FAILED, payload: error }))
}

export const requestUser = (id) => (dispatch) => {
    dispatch({ type: REQUEST_USER_PENDING });
    fetch(`https://reqres.in/api/users/${id}`)
        .then(response => response.json())
        .then(received => dispatch({ type: REQUEST_USER_SUCCESS, payload: received }))
        .catch(error => dispatch({ type: REQUEST_USER_FAILED, payload: error }))
}
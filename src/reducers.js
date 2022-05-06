import {
    REQUEST_USERS_SUCCESS,
    REQUEST_USERS_PENDING,
    REQUEST_USERS_FAILED,
    REQUEST_USER_SUCCESS,
    REQUEST_USER_PENDING,
    REQUEST_USER_FAILED,
} from './constants';

const initialStateUsers = {
    isFetched: false,
    users: [],
    error: ''
}

export const requestUsers = (state = initialStateUsers, action = {}) => {
    switch (action.type) {
        case REQUEST_USERS_PENDING:
            return Object.assign({}, state, { isFetched: false })
        case REQUEST_USERS_SUCCESS:
            return Object.assign({}, state, { users: action.payload, isFetched: true })
        case REQUEST_USERS_FAILED:
            return Object.assign({}, state, { error: action.payload, isFetched: false })
        default:
            return state;
    }
}

const initialStateUser = {
    showUserCard: false,
    user: {},
    error: ''
}

export const requestUser = (state = initialStateUser, action = {}) => {
    switch (action.type) {
        case REQUEST_USER_PENDING:
            return Object.assign({}, state, { showUserCard: false })
        case REQUEST_USER_SUCCESS:
            return Object.assign({}, state, { user: action.payload, showUserCard: true })
        case REQUEST_USER_FAILED:
            return Object.assign({}, state, { error: action.payload, showUserCard: false })
        default:
            return state;
    }
}
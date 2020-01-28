import * as UsersActionsTypes from "./types";

const initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UsersActionsTypes.GET_USERS_LIST:
            return state.users;
        case UsersActionsTypes.ADD_USER:
            return {
                ...state,
                users: [...state.users, {id: state.users.length + 1, name: action.payload}]
            };
            break;
        default:
            return state;
    }
};

export default usersReducer;

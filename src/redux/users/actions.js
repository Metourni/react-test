import * as ActionsTypes from "./types";

export const getUsersList = () => {
    return {
        type: ActionsTypes.GET_USERS_LIST
    }
};

export const addUser = (user) => {
    return {
        type: ActionsTypes.ADD_USER,
        payload: user
    }
};

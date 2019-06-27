import {ACTION_TYPE} from "../services/constants";

export const createItem = task => ({
    type: ACTION_TYPE.CREATE_ITEM,
    payload: task
});

export const deleteItem = id => ({
    type: ACTION_TYPE.DELETE_ITEM,
    payload: id
});

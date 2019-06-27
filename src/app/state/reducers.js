import {ACTION_TYPE} from "../services/constants";
import _ from "lodash";

const defaultState = {
    items: []
};

export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
      case ACTION_TYPE.CREATE_ITEM: {

          let item = action.payload;
          let newItem = {id: state.items.length + 1, description: item};
          let newState = _.cloneDeep(state);
          newState.items.push(newItem);
          return newState;
      }

      case ACTION_TYPE.DELETE_ITEM: {
          let newState = _.cloneDeep(state);
          let searchIndex = parseInt(action.payload);
          let index = _.findIndex(newState.items, {id: searchIndex});
          if (index > -1) {
              newState.items.splice(index, 1);
          }
          return newState;
      }

      default:
          return state;
  }
};

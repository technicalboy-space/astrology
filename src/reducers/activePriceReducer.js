import {EDIT_ACTIVE_PRICE} from '../actions/types';

const initialState = {
  activePrice: {},
};

const activePriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_ACTIVE_PRICE:
      return {
        ...state,
        activePrice: action.price,
      };
    default:
      return state;
  }
};

export default activePriceReducer;

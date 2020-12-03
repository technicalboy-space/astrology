import {INSTALL_PRICE, EDIT_ACTIVE_PRICE} from './types';

export const getAllPrice = () => (dispatch) => {
  dispatch({type: INSTALL_PRICE});
};

export const choosePrice = (price) => (dispatch) => {
  dispatch({type: EDIT_ACTIVE_PRICE, price: price});
};

import {INSTALL_PRICE} from '../actions/types';

const initialState = {
  priceList: [
    {
      name: 'Monthly',
      description: '949,00 $/month',
      price: 949,
      popular: false,
    },
    {
      name: 'Annually',
      description: '3950,00 $/year',
      price: 3950,
      popular: true,
    },
  ],
};

const priceReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSTALL_PRICE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default priceReducer;

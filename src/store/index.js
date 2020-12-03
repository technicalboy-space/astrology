import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import priceReducer from '../reducers/priceReducer';
import activePriceReducer from '../reducers/activePriceReducer';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  priceReducer: priceReducer,
  activePriceReducer: activePriceReducer,
});

const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

export default configureStore;

import { combineReducers } from 'redux';
import cart from './cart';
import info from './info';

const rootReducer = combineReducers({ cart, info });

export default rootReducer;

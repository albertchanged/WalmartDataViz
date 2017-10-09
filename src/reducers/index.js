import { combineReducers } from 'redux';
import ProductReducer from './reducer_product';

const rootReducer = combineReducers({
  product: ProductReducer
});

export default rootReducer;

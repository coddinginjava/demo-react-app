import { combineReducers } from 'redux';
import CounterReducer from './../Counter/CounterReducer';
import NameReducer from './../Name/NameReducer'

const rootReducer = combineReducers({ counter: CounterReducer, names: NameReducer });

export default rootReducer;
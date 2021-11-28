import { combineReducers } from "redux";
import { user } from './user';
import { orders } from './orders';

export default combineReducers({ user, orders });
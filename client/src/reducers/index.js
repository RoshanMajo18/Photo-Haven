import { combineReducers } from "redux";
import posts from './posts'
import auth from './auth'

let reducers
export default reducers= combineReducers({posts,auth})
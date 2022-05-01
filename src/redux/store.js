import { Reducer } from "./reducer";
import {legacy_createStore} from "redux";
import { applyMiddleware } from "redux";



export const store = legacy_createStore(Reducer,{todo:[]});
import { ADD_TODO } from "./action";
import { TOGGLE } from "./action";
import {REMOVE} from "./action"
import { store } from "./store";
export const Reducer = (store,{type,payload})=>{
    switch(type){
        case ADD_TODO:
            return{...store,todo:payload}
        case  TOGGLE:
            return {...store,todo:store.todo.map((e)=>e.id === payload?{...e,status:!e.status}:e),}
        case REMOVE:
            return {...store,todo:store.todo.filter((e)=>e.id!==payload)}
        default:
            return store;
    }
    
}
export const ADD_TODO = "ADD_TODO";
export const TOGGLE = "TOGGLE";
export const REMOVE = "REMOVE" 

export const addTodo = (data)=>{
    return {
        type:ADD_TODO,
        payload:data,
    }
}
export const Toggle = (id)=>{
    return {
        type:TOGGLE,
        payload:id
    }
}
export const Delete = (id)=>{
    return {
        type:REMOVE,
        payload:id
    }
}
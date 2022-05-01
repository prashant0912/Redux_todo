import { useDispatch, useSelector } from "react-redux"
import {useEffect, useState} from "react"
import { addTodo } from "./redux/action";
import {Toggle} from "./redux/action";
import {Delete} from "./redux/action";
import { Link } from "react-router-dom";

export const Todo = ()=>{
    const dispatch = useDispatch()
    const todo = useSelector((store)=>store.todo);
    const [text,setText] = useState("");
    useEffect(()=>{
        getdata();
    },[])
    const handleadd = ()=>{
        const payload = {
            title:text,
            status:false,
        }
        fetch("http://localhost:8080/todo",{
            body:JSON.stringify(payload),
            headers:{
                "content-type":"application/json"
            },
            method:"POST"
        }).then(getdata)
            
        
    }
    const getdata = async ()=>{
        const data = await fetch("http://localhost:8080/todo").then((d)=>d.json())
        dispatch(addTodo(data))
    }
    return (
        <div>
        <input className = "inp_box" type="text"  onChange = {(e)=>{
            setText(e.target.value)
        }}/>
        <button onClick = {()=>{
            handleadd()
        }}>Add Todo</button>
        {todo.map((e)=>{
            return <div className ="new_data" key = {e.id}><Link to = {`/todo/${e.id}`}>{e.id}.{e.title}</Link>-{e.status?"Completed":"Not Completed"}
            <button onClick = {()=>{
                dispatch(Toggle(e.id))
            }}>{e.status?"Not Completed":"Mark as Complete"}</button>
            <button onClick ={()=>{
                dispatch(Delete(e.id))
            }} >Remove</button></div>
        })}
        </div>
    )
}
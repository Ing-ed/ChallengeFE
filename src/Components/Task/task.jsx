import './task.css'
import { useState, useRef, useContext, useEffect } from "react";
import { Context } from '../Context/Context';

export function Task({name,tid,description,check,index}){
    const {tasks, setTasks} = useContext(Context);
    const completed = useRef(null);
    useEffect(() =>{
        completed.current.style.backgroundColor = check? "green" : "red";
    },[check])

    async function CompleteTask(){
        console.log({tid:tid});
        let resp = await fetch(`http://localhost:8080/api/tasks/checktask`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({tid:tid})
        })
        resp = await resp.json();
        if(resp.result === "OK"){
            completed.current.style.backgroundColor = resp.payload.completed? "green" : "red";
        }
        console.log(resp);
    }
    async function DeleteTask(){
        let resp = await fetch(`http://localhost:8080/api/tasks/deletetask`,{
            method:"DELETE",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify({tid:tid})
        })
        resp = await resp.json();
        console.log(resp,"DELETE")
        if(resp.result === "OK"){
            setTasks(item => item.filter((_,i) => i!== index))
        }
    }


    return(
        <ul className='Task' name={tid}>
            <li>
                <p><b>{name}</b></p>
                <p><i>{description}</i></p>
            </li>
            <li className='control'>
                {/* <input type="checkbox" value={check} disabled="disabled" ref={completed}/> */}
                <div className='check' ref={completed}></div>
                <button onClick={CompleteTask}>Completed</button>
                <button id='delete' onClick={DeleteTask}>Delete</button>
            </li>

        </ul>
    )
}
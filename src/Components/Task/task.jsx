import './task.css'
import { useState, useEffect, useRef } from "react";

export function Task({name,tid,description,check}){
    const [state, setState] = useState(false);
    const completed = useRef(null);
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
            setState(resp.payload.completed);
            console.log(state)
            completed.current.style.backgroundColor = state? "green" : "red";
        }
        console.log(resp.result);
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
        if(resp.result === "OK"){
            
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
                <button id='delete'>Delete</button>
            </li>

        </ul>
    )
}
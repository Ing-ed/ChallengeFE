import './task.css'
import { useState, useRef, useContext, useEffect } from "react";
import { Context } from '../Context/Context';


/**
 * this component shows task information, name, description, completed
 * also, provides the buttons to check task (complete) or delete it. 
 * @returns 
 */
export function Task({name,tid,description,check,index}){
    const {setTasks, setIndex, setShowModal, setModalField, setModalTid} = useContext(Context);
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
        console.log(resp,"DELETE",index)
        if(resp.result === "OK"){
            setTasks(item => item.filter((_,i) => i!== index))
        }
    }

    function ShowModal(name){
        console.log("index",index)
        setModalField(name)
        setModalTid(tid)
        setIndex(index)
        setShowModal(true)
    }

    return(
        <ul className='Task' name={tid}>
            <li>
                <p onClick={() => {ShowModal("name")}}><b>{name}</b></p>
                <p onClick={() => {ShowModal("description")}}><i>{description}</i></p>
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
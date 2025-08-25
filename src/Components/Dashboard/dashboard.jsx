import { Menu } from "../Menu/menu";
import { Tasks } from "../Tasks/tasks";
import { useEffect,useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";
import { Modal } from "../Modal/modal";
import './dashboard.css'

export function Dashboard(){
    const {uid, tasks, showModal, modalField,modalVal,modalTid, index,setTasks} = useContext(Context);
    const navigate = useNavigate();
    /**
     * get all user's task
     */
    async function GetTasks() {
        console.log("getTask")
        let resp = await fetch(`https://challenge-be.vercel.app/api/tasks/getusertasks`,{
            method:"GET",
            credentials:'include'
        })
        resp = await resp.json()
        console.log("GetTasek resp",resp)
        if(resp.result === "AuthError"){
            navigate("/login");
        }
        setTasks(resp.payload);
        console.log(resp, tasks);
    }
    /** update the task list when user creates a new task  */
    
    useEffect(() =>{
        GetTasks();
    },[])
    return(
        <div id="dashboard">
            <Menu GetTasks={GetTasks}/>
            <Tasks tasks={tasks}/>
            {showModal && <Modal field ={modalField} value={modalVal}  tid={modalTid} index={index}/>}
        </div>
    )
}
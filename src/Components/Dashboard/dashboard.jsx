import { Menu } from "../Menu/menu";
import { Tasks } from "../Tasks/tasks";
import { useEffect,useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";
import { Modal } from "../Modal/modal";
import './dashboard.css'

export function Dashboard(){
    const {uid, tasks, setTasks, showModal, modalName,modalVal,modalTid, index} = useContext(Context);
    const navigate = useNavigate();
    async function GetTasks() {
        console.log("getTask")
        let resp = await fetch(`http://localhost:8080/api/tasks/getusertasks`,{
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
    function UpdtTasks(newTasks){
        setTasks(newTasks);
    }
    useEffect(() =>{
        GetTasks();
    },[])
    return(
        <div id="dashboard">
            <Menu tasks={tasks} setTasks={UpdtTasks} GetTasks={GetTasks}/>
            <Tasks tasks={tasks}/>
            {showModal && <Modal name ={modalName} value={modalVal}  tid={modalTid} index={index}/>}
        </div>
    )
}
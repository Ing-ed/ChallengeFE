import { Menu } from "../Menu/menu";
import { Tasks } from "../Tasks/tasks";
import { useEffect,useContext, useState } from "react";
import { Context } from "../Context/Context";
import { Modal } from "../Modal/modal";
import './dashboard.css'

export function Dashboard(){
    const {uid, tasks, setTasks, showModal, modalName,modalVal,modalTid} = useContext(Context);
    async function GetTasks() {
        let resp = await fetch(`http://localhost:8080/api/tasks/getusertasks/${uid}`)
        resp = await resp.json()
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
            <Menu tasks={tasks} setTasks={UpdtTasks}/>
            <Tasks tasks={tasks}/>
            {showModal && <Modal name ={modalName} value={modalVal}  tid={modalTid}/>}
        </div>
    )
}
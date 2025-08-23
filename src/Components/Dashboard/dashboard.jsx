import { Menu } from "../Menu/menu";
import { Tasks } from "../Tasks/tasks";
import { useEffect,useContext, useState } from "react";
import { Context } from "../Context/Context";
import './dashboard.css'

export function Dashboard(){
    const {uid} = useContext(Context);
    const [tasks, setTasks] = useState([])
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
        </div>
    )
}
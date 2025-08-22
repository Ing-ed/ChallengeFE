import { Menu } from "../Menu/menu";
import { Tasks } from "../Tasks/tasks";
import { useEffect,useContext } from "react";
import { Context } from "../Context/Context";
import './dashboard.css'

export function Dashboard(){
    const {uid} = useContext(Context);
    async function GetTasks() {
        let resp = await fetch(`http://localhost:8080/api/tasks/getusertasks/${uid}`)
        resp = await resp.json()
        console.log(resp);
    }
    useEffect(() =>{
        GetTasks();
    },[])
    return(
        <div id="dashboard">
            <Menu/>
            <Tasks/>
        </div>
    )
}
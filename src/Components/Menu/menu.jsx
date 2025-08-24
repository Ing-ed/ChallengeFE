import './menu.css'
import { FormField } from '../FormField/formField'
import { useContext, useState } from 'react';
import { Context } from '../Context/Context';


/**
 * 
 * @param {GetTasks} setTasks - the callback to update the task list 
 * @returns 
 */
export function Menu({GetTasks}){
    const [credentials,setCredentials] = useState([]);
    const {uid, setTasks,tasks} = useContext(Context);
    function handleEvent(event){
        const {name} = event.target;
        // console.log(event.target.value,name)
        setCredentials({
            ...credentials,
            [name]: event.target.value
        })
    }
    async function NewTask(){
        console.log("uid",uid)
        setCredentials({...credentials,uid:uid});
        console.log(credentials,"credNewtask")
        let resp = await fetch(`http://localhost:8080/api/tasks/newtask`,{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            credentials:'include',
            body:JSON.stringify({...credentials,uid:uid})
        })
        resp = await resp.json();
        console.log("respuestanewtask",resp);
        if(resp.result === "OK"){
            setTasks([...tasks,resp.payload])
        }
    }
    return(
        <aside id="menu">
            <ul>
                <FormField name="name" type="text" handleEvent={handleEvent} text="Nombre de la tarea"/>
                <FormField name="description" type="text" handleEvent={handleEvent} text="Descripcion" />
            </ul>
                <button onClick={NewTask}>Crear tarea</button>
                <button onClick={GetTasks}>Refresh</button>
        </aside>
    )
}
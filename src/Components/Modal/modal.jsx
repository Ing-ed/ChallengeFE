/**
 * este modal esta pensado para el cambio de propiedades de la tarea, cambiar el nombre o la descripcion
 * @param {name} name - es el nombre de la propiedad a modificar
 * @param {value} value - es el nuevo valor. 
 * @returns 
 */
import { Context } from '../Context/Context';
import './modal.css'
import { useContext, useState } from 'react'

export function Modal({field, tid,index}){
    console.log(index,"index modal")
    const [val, setVal] = useState("");
    const {setShowModal,tasks,setTasks} = useContext(Context)
    function HandleEvent(event){
        setVal(event.target.value);
    }
    async function UpdateTask() {
        let resp = await fetch(`http://localhost:8080/api/tasks/updatetask`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({tid:tid,field:field,value:val})
        });
        resp = await resp.json();
        console.log(resp);
        if(resp.result === "OK"){
            let update = {$set:{}}
            update.$set[field] = val
            console.log(update.$set,"update");
            console.log("Index:", index, "Tasks:", tasks);
            let updatedVal = tasks[index]
            console.log(updatedVal,index,"tasks[index")
            updatedVal = {...updatedVal,...update.$set}
            let updatedArray = [...tasks];
            updatedArray[index] = updatedVal;
            console.log(updatedArray,"Modal")
            setTasks(updatedArray);
            console.log(tasks,"Modal")
            setShowModal(false);
        }
    }
    return(
        <div id="Modal">
            <label>Ingrese nuevo {field}</label>
            <input type="text" onChange={HandleEvent}/>
            <button onClick={UpdateTask}>Update</button>
            <button onClick={() => {setShowModal(false)}}>Cancelar</button>
        </div>
    )
}
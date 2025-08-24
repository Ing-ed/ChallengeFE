import { useEffect } from 'react'
import { Task } from '../Task/task'
import './tasks.css'
/**
 * this component works as container for deployed tasks.
 * @returns 
 */
export function Tasks({tasks}){
    console.log("Tasks",tasks)
    return(
        <div id="tasks">
            <ul>
                {tasks.map((item,index) =>{
                    return(
                        <li><Task name={item.name} tid={item._id} description={item.description} check={item.completed} index={index}/></li>
                    )
                })}
            </ul>
        </div>
    )
}
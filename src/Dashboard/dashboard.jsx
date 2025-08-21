import { Menu } from "../Components/Menu/menu";
import { Tasks } from "../Tasks/tasks";
import './dashboard.css'

export function Dashboard(){
    return(
        <div id="dashboard">
            <Menu/>
            <Tasks/>
        </div>
    )
}
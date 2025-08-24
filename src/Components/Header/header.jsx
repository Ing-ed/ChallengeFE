import { useNavigate, useParams} from "react-router-dom"
import { useContext } from "react";
import { Context } from "../Context/Context";
import './header.css'

/**
 * 
 * @param {route} route - Contain the url's endpoint 
 * @returns 
 */
export function Header({route}){
    const navigate = useNavigate();
    const {navigation} = useContext(Context);
    
    
    console.log(navigation[route], route,"ruta desde session")
    function Nav(){
        console.log(`/${navigation[route].text}}`);
        navigate(`/${navigation[route].path}`)
    }

    return(
        <div id="header">
            <img src="logo.png" alt="logo inged embedded" id="logo"/>
            <h1>Bienvenido</h1>
            <a onClick={Nav}>{navigation[route].text}</a>
        </div>
    )
}
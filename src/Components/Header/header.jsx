import { useNavigate, useParams} from "react-router-dom"
import { useContext } from "react";
import { Context } from "../Context/Context";
import './header.css'

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
            <div id="logo">Logo</div>
            <h1>Bienvenido</h1>
            <a onClick={Nav}>{navigation[route].text}</a>
        </div>
    )
}
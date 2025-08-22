import { useNavigate, useParams } from "react-router-dom"
import './header.css'

export function Header({route}){
    const navigate = useNavigate();
    
    const navigation={
        default:{
            text:"login",
            path:"login"
        },
        login:{
            text:"signup",
            path:"signup"
        },
        signup:{
            text:"login",
            path:"login"
        },
        dashboard:{
            text:"close session",
            path:"login"
        }
    }
    console.log(navigation[route], route)
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
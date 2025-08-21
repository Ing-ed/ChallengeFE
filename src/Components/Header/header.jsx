import { useNavigate, useParams } from "react-router-dom"
import './header.css'

export function Header(){
    const button={
        login:{
            text:"LogIn"
        },
        signup:{
            text:"signup"
        },
        exit:{
            text:"exit"
        }
    }

    return(
        <div id="header">
            <div id="logo">Logo</div>
            <h1>Bienvenido</h1>
            <a>{button['login']['text']}</a>
        </div>
    )
}
import './session.css'
import { FormField } from '../FormField/formField'
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../Context/Context';

/**
 * this component wors as login or signup, depending of the route param
 * @param {route} route - contains the url's endpoint 
 * @returns 
 */
export function Session({route}){
    console.log(route)
    const [credentials,setCredentials] = useState([]);
    const [message,setMessage] = useState("");
    const navigate = useNavigate();
    const {uid,setUid} = useContext(Context);

    /**
     * manejo de eventos
     * @param {event} event- Evento de cambio 
     */
    function handleEvent(event){
        const {name} = event.target;
        // console.log(event.target.value,name)
        setCredentials({
            ...credentials,
            [name]: event.target.value
        })
    }

    /**
     * envia la información al servidor para inicio de sesion o registro de usuario
     */
    async function Send(){
        console.log(credentials)
        let resp = await fetch(`http://localhost:8080/api/sessions/${route}`,{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            credentials:'include',
            body:JSON.stringify(credentials)
        })
        resp = await resp.json();
        console.log("respuesta de session",resp)
        if(resp.result === "OK"){
            if(route === 'login'){
                setUid(resp.payload.uid);
                console.log(uid,"UID");
            }
            navigate((route === "login")? "/dashboard": "/login");
        } else {
            setMessage(resp.payload);
        }
        console.log(resp, route);
    }


    return(
        <div id="session">
            {route === "signup" ? (<>
                <FormField text={"Name"} type={"text"} handleEvent={handleEvent} name={"name"}/>
                <FormField text={"Last Name"} type={"text"} handleEvent={handleEvent} name={"lastname"}/>
                <FormField text={"Email"} type={"Email"} handleEvent={handleEvent} name={"email"}/>
                <FormField text={"Password"} type={"Password"} handleEvent={handleEvent} name={"pass"}/>
            </>
            ): (
                <>
                <FormField text={"Email"} type={"Email"} handleEvent={handleEvent} name={"email"}/>
                <FormField text={"Password"} type={"Password"} handleEvent={handleEvent} name={"pass"}/>
                {message !== "" && <p>{message}</p>}

                    
                </>
            )}
            <button onClick={Send}>{route === 'login' ? "LogIn": "SignUp"}</button>
        </div>
    )
}
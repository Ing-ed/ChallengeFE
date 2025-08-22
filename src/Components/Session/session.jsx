import './session.css'
import { FormField } from '../FormField/formField'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function Session({route}){
    console.log(route)
    const [credentials,setCredentials] = useState([]);
    const [message,setMessage] = useState("");
    const navigate = useNavigate()
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
        console.log(`http://localhost:8080/api/sessions/${route}`)
        let resp = await fetch(`http://localhost:8080/api/sessions/${route}`,{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(credentials)
        })
        resp = await resp.json();
        if(resp.result === "OK"){
            navigate("/dashboard");
        } else {
            setMessage(resp.payload);
        }
        console.log(resp, route);
    }


    return(
        <div id="session">
            {route === "login" ? (<>
                <FormField text={"Email"} type={"Email"} handleEvent={handleEvent} name={"email"}/>
                <FormField text={"Password"} type={"Password"} handleEvent={handleEvent} name={"pass"}/>
                {message !== "" && <p>{message}</p>}
            </>
            ): (
                <>
                <FormField text={"Name"} type={"text"} handleEvent={handleEvent} name={"name"}/>
                <FormField text={"Last Name"} type={"text"} handleEvent={handleEvent} name={"lastName"}/>
                <FormField text={"Email"} type={"Email"} handleEvent={handleEvent} name={"email"}/>
                <FormField text={"Password"} type={"Password"} handleEvent={handleEvent} name={"pass"}/>

                    
                </>
            )}
            <button onClick={Send}>{route === '/login' ? "LogIn": "SignUp"}</button>
        </div>
    )
}
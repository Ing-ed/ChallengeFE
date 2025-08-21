import './session.css'
import { FormField } from '../FormField/formField'
export function Session({rute}){
    return(
        <form id="session">
            {rute === "login" ? (<>
                <FormField text={"Email"} type={"Email"}/>
                <FormField text={"Password"} type={"Password"}/>
            </>


            ): (
                <>
                <FormField text={"Name"} type={"text"}/>
                <FormField text={"Last Name"} type={"text"}/>
                <FormField text={"Email"} type={"Email"}/>
                <FormField text={"Password"} type={"Password"}/>

                    
                </>
            )}
            <button>{rute === 'login' ? "LogIn": "SignUp"}</button>
        </form>
    )
}
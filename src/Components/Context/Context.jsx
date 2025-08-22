import { createContext, useState } from "react";

export const Context = createContext();
const navigation={
    default:{
        text:"signup",
        path:"signup",
        session:"signup"
        },
        login:{
            text:"signup",
            path:"signup",
            session:"dashboard"
        },
        signup:{
            text:"login",
            path:"login",
            session:"login"
        },
        dashboard:{
            text:"close session",
            path:"login",
            session:"login"
        }
    }

export function Provider({children}){
    const [uid,setUid] = useState("");
    return(
        <Context.Provider value = {{
            navigation:navigation,
            uid:uid,
            setUid:setUid
        }}> {children}
        </Context.Provider>
    )
}
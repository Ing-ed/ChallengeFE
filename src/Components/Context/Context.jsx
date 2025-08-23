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
    const [tasks, setTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalName, setModalName] = useState("");
    const [modalTid, setModalTid] = useState("");
    const [index, setIndex] = useState(0);
    return(
        <Context.Provider value = {{
            tasks:tasks,
            setTasks:setTasks,
            navigation:navigation,
            uid:uid,
            setUid:setUid,
            showModal:showModal,
            setShowModal:setShowModal,
            modalName:modalName,
            setModalName:setModalName,
            modalTid:modalTid,
            setModalTid,setModalTid,
            index:index,
            setIndex:setIndex
        }}> {children}
        </Context.Provider>
    )
}
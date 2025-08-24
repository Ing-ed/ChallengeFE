/**
 * Here, there are the global variables, status, and account information.
 */

import { createContext, useState } from "react";

export const Context = createContext();

/**
 * 
 * navigation - used for components to navigate throgh different endpoints
 * 
 * @returns 
 */
export function Provider({children}){
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
    const [uid,setUid] = useState("");
    const [tasks, setTasks] = useState([]);  //this array contains the task list for the user
    const [showModal, setShowModal] = useState(false);
    const [modalField, setModalField] = useState(""); //the field of task to modify
    const [modalTid, setModalTid] = useState(""); //the task id for modification
    const [index, setIndex] = useState(0);  // the task's index in the task list
    return(
        <Context.Provider value = {{
            tasks:tasks,
            setTasks:setTasks,
            navigation:navigation,
            uid:uid,
            setUid:setUid,
            showModal:showModal,
            setShowModal:setShowModal,
            modalField:modalField,
            setModalField:setModalField,
            modalTid:modalTid,
            setModalTid,setModalTid,
            index:index,
            setIndex:setIndex
        }}> {children}
        </Context.Provider>
    )
}
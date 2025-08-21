import { createContext } from "react";

export const Context = createContext();
export function Provider({children}){
    return(
        <Context.Provider value = {{
            
        }}> {children}
        </Context.Provider>
    )
}
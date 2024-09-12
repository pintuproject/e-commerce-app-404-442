import {  createContext,useReducer } from "react";
import { cartReducer } from "./CartReducer";


const initialValue={
    cart:[],
    
}


export const GlobalStateContext=createContext()
export const GlobalDispatchContext=createContext()
export const GlobalStateProvider=({children})=>{
    const[state,dispatch]=useReducer(cartReducer,initialValue)
    return(
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>

    );
}
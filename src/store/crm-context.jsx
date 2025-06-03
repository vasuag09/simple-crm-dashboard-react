import { createContext } from "react";
export const CrmContext = createContext({
    clients: [],
    addClient: ()=>{},
    deleteClient: ()=>{},
    editClient: ()=>{}
})
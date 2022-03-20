import { createContext, useState } from "react";
export const authContext = createContext(); 

const AuthContextProvider = ({children})=>{

    const [token, setToken] = useState("");

    async function logIn(loginData){
        try{
            const res = await fetch("https://reqres.in/api/users", {
                method : "POST", 
                body : JSON.stringify(loginData),
                headers : {
                    "Content-Type" : "application/json"
                }
            });

            const res_data = await res.json();
            
            setToken(res_data.id);

        }catch(error){
            console.log(error);
        }
    }

    function toggleAuth(loginData){
        if(token !== "")
        {
            setToken("");
        }
        else
        {
            logIn(loginData);
        }
    }

    return(
        <authContext.Provider value = {{toggleAuth, token}} >
            {children}
        </authContext.Provider>
    );
}

export {AuthContextProvider};
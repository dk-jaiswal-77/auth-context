import { useContext } from "react";
import { authContext } from "../contexts/AuthContext";

export default function Navbar(){

    const {toggleAuth, token} = useContext(authContext);

    return(
        <nav>
            <button onClick={()=>{
                toggleAuth();
            }}>
                {(token !== "") ? "Logout" : "Log-In"}
            </button>
        </nav>
    );
}
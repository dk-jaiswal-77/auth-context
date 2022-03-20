import { useContext } from "react";
import { authContext } from "../contexts/AuthContext";

export default function LoginDetail(){

    const {token} = useContext(authContext);

    return (
        <div>
            <h2>You are currently logged in!</h2>
            <p>{token}</p>
        </div>
    );
}
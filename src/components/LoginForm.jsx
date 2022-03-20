import { useContext, useState } from "react";
import { authContext } from "../contexts/AuthContext";

export default function LoginForm(){

    const {toggleAuth, token} = useContext(authContext);

    const [userData, setUserData] = useState({
        email : "", 
        password : ""
    });

    function handleChange(e){
        setUserData({...userData, [e.target.id] : e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        toggleAuth(userData);
    }

    return (
        <form onSubmit={(e) => {handleSubmit(e)}}>

            <input type="email" id="email" placeholder="enter your email" value={userData.email} onChange = {(e)=>{
                handleChange(e);
            }} />

            <input type="password" id="password" placeholder="enter password" value={userData.password} onChange = {(e) => {
                handleChange(e);
            }} />

            <input type="submit" value="LogIn" />

        </form>
    );
}
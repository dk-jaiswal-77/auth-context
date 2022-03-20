import './App.css';   
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import LoginDetail from './components/LoginDetail';

import {useContext} from "react";
import {authContext} from "./contexts/AuthContext";

function App() {

  const {toggleAuth, token} = useContext(authContext);

  return (
    <div className="App">
      < Navbar />
      {(token !== "") ? <LoginDetail /> : <LoginForm /> } 
    </div>
  );
}

export default App;

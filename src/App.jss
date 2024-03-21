import logo from './logo.svg';
import './App.css';
import FormInput from "./components/FormInput";
import {useState} from "react";

function App() {
    const [username, setUsername ] = useState("")



  return (
    <div className="App">
      <FormInput placeholder="Username"  setUsername = {setUsername}  />
      <FormInput placeholder = "Email"/>
      <FormInput placeholder = "Name"/>

    </div>
  );
}

export default App;

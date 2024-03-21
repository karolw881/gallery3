import logo from './logo.svg';
import './App.css';
import FormInput from "./components/FormInput";
import { useState } from "react";

const App = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const inputs = [
        { id: 1, name: "username", type: "text", placeholder: "Username", label: "Username" },
        { id: 2, name: "password", type: "text", placeholder: "password", label: "password" },
        { id: 2, name: "name", type: "text", placeholder: "name", label: "name" },

    ];

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;

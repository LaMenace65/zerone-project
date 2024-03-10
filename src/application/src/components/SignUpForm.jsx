import {useState} from "react";

export default function SignUpForm() {
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(surname, email, password);
    }

    const handleChangeSurname = (event) => {
        setSurname(event.target.value)
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    return <>
        <form onSubmit={handleSubmit}>
            <label>Surname:</label>
            <input type="text" value={surname} onChange={handleChangeSurname}/>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleChangeEmail}/>
            <label>Password:</label>
            <input type="password" value={password} onChange={handleChangePassword}/>
            <button type="submit">Sign Up</button>
        </form>
    </>
}
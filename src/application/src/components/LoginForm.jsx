import {useState} from "react";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    return <>
        <form onSubmit={handleSubmit}>
            <label>Email:
                <input id="email"
                       value={email}
                       type="email"
                       placeholder="Type your email"
                       onChange={handleChangeEmail}
                />
            </label>
            <label>Password:
                <input id="password"
                       value={password}
                       type="password"
                       placeholder="Type your password"
                       onChange={handleChangePassword}
                />
            </label>
            <button type="submit">Login</button>
        </form>
    </>
}
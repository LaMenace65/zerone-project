import {useState} from "react";
import '../css/Login-SignUp.css'

export default function LoginForm() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const response = fetch("http://localhost:3000/api/users/login", {})
        console.log(response);
    }

    return <>
        <div className="ConnexionForm">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <div className="input-Login-SignUp">
                        <i className="fi fi-rr-envelope"></i>
                        <input id="email"
                               value={email}
                               type="email"
                               placeholder="Type your email"
                               onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="input-Login-SignUp">
                        <i className="fi fi-rr-lock"></i>
                        <input id="password"
                               value={password}
                               type="password"
                               placeholder="Type your password"
                               onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                </div>
                <div className="connect-options">
                    Lost Password? <span>Click Here!</span>
                </div>
                <div className="submit">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    </>
}
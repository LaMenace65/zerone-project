import {useState} from "react";

export default function SignUpForm() {
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(surname, email, password);
    }

    return <>
        <div className="ConnexionForm">
            <div className="header">
                <div className="text">Create your account</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <div className="input-Login-SignUp">
                        <i className="fi fi-rr-user"></i>
                        <input type="text"
                               value={surname}
                               placeholder="Type your username"
                               onChange={(event) => setSurname(event.target.value)}
                        />
                    </div>
                    <div className="input-Login-SignUp">
                        <i className="fi fi-rr-envelope"></i>
                        <input type="email"
                               value={email}
                               placeholder="Type your email"
                               onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="input-Login-SignUp">
                        <i className="fi fi-rr-lock"></i>
                        <input type="password"
                               value={password}
                               placeholder="Type your password"
                               onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                </div>
                <div className="connect-options">
                    Already have an account? <span>Click Here!</span>
                </div>
                <div className="submit">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    </>
}
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {username, email, password};
        axios.post("http://localhost:3000/api/users/signup", userData)
            .then(res => {
                console.log(res.data);
                navigate("/home");
            })
            .catch(err => console.log(err.response));

    }

    return <>
        <div className="ConnexionForm">
            <div className="header">
                <div className="text">Create your account</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inputs-LSU">
                    <div className="input-LSU">
                        <i className="fi fi-rr-user"></i>
                        <input type="text"
                               value={username}
                               placeholder="Type your username"
                               onChange={(event) => setUsername(event.target.value)}
                               required
                        />
                    </div>
                    <div className="input-LSU">
                        <i className="fi fi-rr-envelope"></i>
                        <input type="email"
                               value={email}
                               placeholder="Type your email"
                               onChange={(event) => setEmail(event.target.value)}
                               required
                        />
                    </div>
                    <div className="input-LSU">
                        <i className="fi fi-rr-lock"></i>
                        <input type="password"
                               value={password}
                               placeholder="Type your password (at least 8 characters)"
                               onChange={(event) => setPassword(event.target.value)}
                               required
                        />
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

export default SignUp;
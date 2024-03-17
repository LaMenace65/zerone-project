import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {accountService} from "../../_services/accountService";
import Axios from "../../_services/callerService";


const Login = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email : 'patrick@gmail.com',
        password : 'patrick123'
    })

    const onChange = (e) => {
        setCredentials({
            ...credentials,
             [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        Axios.post("/users/login", credentials)
            .then(res => {
                accountService.saveToken(res.data.authToken);
                navigate("/admin");
            })
            .catch(err => {
                console.log(err.response);
            });
    }

    return <>
        <div className="ConnexionForm">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={onSubmit}>
                <div className="inputs-LSU">
                    <div className="input-LSU">
                        <i className="fi fi-rr-envelope"></i>
                        <input name="email"
                               value={credentials.email}
                               type="email"
                               placeholder="Type your email"
                               onChange={onChange}
                               required
                        />
                    </div>
                    <div className="input-LSU">
                        <i className="fi fi-rr-lock"></i>
                        <input name="password"
                               value={credentials.password}
                               type="password"
                               placeholder="Type your password"
                               onChange={onChange}
                               required
                        />
                    </div>
                </div>
                <div className="connect-options">
                    Lost Password? <span>Click Here!</span>
                </div>
                {/*<div className="connect-infos">*/}
                {/*    {isLogged ? null : <div className="connect-infos">Wrong email or password</div>}*/}
                {/*</div>*/}
                <div className="submit">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    </>
}

export default Login;
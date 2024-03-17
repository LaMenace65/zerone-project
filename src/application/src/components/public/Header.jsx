import {NavLink} from "react-router-dom";
import "./header.css"
const Header = () => {
    return <>
        <div className="public-header">
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/home">Home</NavLink></li>
                    {/*<li><NavLink to="/blogs">Blogs</NavLink></li>*/}
                    <li><NavLink to="contact">Contact</NavLink></li>
                    <li><NavLink to="about">About</NavLink></li>
                    <li><NavLink to="login">Log In</NavLink></li>
                    <li><NavLink to="sign-up">Sign Up</NavLink></li>
                    <li><NavLink to="admin">Admin</NavLink></li>
                    {/*<li><NavLink to="/profile">Profile</NavLink></li>*/}
                </ul>
            </nav>
        </header>
        </div>
    </>
}

export default Header;
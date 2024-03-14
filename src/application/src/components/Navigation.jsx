import {NavLink, Outlet, useNavigation} from "react-router-dom";
import Spinner from "./Spinner";

export default function Navigation() {
    const {state} = useNavigation();

    return <>
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
                <NavLink to="/questions">Questions</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/sign-up">Sign Up</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </nav>
        </header>
        <div className="container my-4">
            {state === 'loading' && <Spinner/>}
            <Outlet/>
        </div>
    </>
}
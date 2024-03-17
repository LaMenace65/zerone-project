import {accountService} from "../../_services/accountService";
import {useNavigate} from "react-router-dom";

const Header = () => {
    let navigate = useNavigate()

    const logout = () => {
        accountService.logout()
        navigate("/home")
    }

    return <>
        <div className="admin-header">
            Admin
            <button onClick={logout}>Log Out</button>
        </div>
    </>
}
export default Header;
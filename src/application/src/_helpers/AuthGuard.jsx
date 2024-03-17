import {Navigate} from "react-router-dom";
import {accountService} from "../_services/accountService";

const authGuard = ({children}) => {
    if(!accountService.isLogged()) {
        return <>
            <Navigate to="/auth/login" />
        </>
    }

    return children;
}

export default authGuard;
import {Route, Routes} from "react-router-dom";
import Login from "./Login";
import Error from "../../_utils/Error";
import "./auth.css"
const AuthRouter = () => {

    return <>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/*" element={<Error/>}/>
        </Routes>
    </>
}

export default AuthRouter;
// import {Navigate, Outlet, useLocation} from "react-router-dom";
// import {useContext} from "react";
//
// const useAuth = () => {
//     const {user} = useContext(UserContext);
//     return user && user.longgedIn;
// }
//
// const ProtectedRoutes = () => {
//     const location = useLocation();
//     const isAuth = useAuth();
//     return isAuth ?
//         (<Outlet/>)
//         :
//         (<Navigate to="/"
//         state={{from: location}}/>);
// }
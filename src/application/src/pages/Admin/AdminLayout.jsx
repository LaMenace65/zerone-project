import {Outlet} from "react-router-dom";
import './admin.css'

import Header from "../../components/admin/Header";
import Footer from "../../components/public/Footer";
import SideMenu from "../../components/admin/SideMenu";

const AdminLayout = () => {
    return <>
        <div className="admin-layout">
            <Header/>
            <div id="admin">
                <SideMenu/>
                <div className="admin-container">
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    </>

}

export default AdminLayout;
import {Outlet} from "react-router-dom";
import Header from "../../components/public/Header";
import Footer from "../../components/public/Footer";

const PublicLayout = () => {
    return <>
        <div className="public-layout">
            <Header/>
            <div className="body-container">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    </>
}

export default PublicLayout;
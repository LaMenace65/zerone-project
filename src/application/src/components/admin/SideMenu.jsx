import {Link} from "react-router-dom";

const SideMenu = () => {
    return <>
        <div className="SideMenu">
            <ul>
                <li><Link to="/">Home</Link></li>
                {/*<li>&nbsp;</li>*/}
                <li><Link to="/admin/dashboard">Dashboard</Link></li>
                <li>
                    User
                    <ul>
                        <li><Link to="/admin/user/index">List</Link></li>
                        <li><Link to="/admin/user/add">Add</Link></li>
                        <li><Link to="/admin/user/edit">Edit</Link></li>
                        <li><Link to="/admin/user/delete">Delete</Link></li>
                    </ul>
                </li>
                <li>
                    Question
                    <ul>
                        <li><Link to="/admin/question/index">List</Link></li>
                        <li><Link to="/admin/question/edit">Edit</Link></li>
                        <li><Link to="/admin/question/delete">Delete</Link></li>
                    </ul>
                </li>
                <li>
                    Category
                    <ul>
                        <li><Link to="/admin/category/index">List</Link></li>
                        <li><Link to="/admin/category/add">Add</Link></li>
                        <li><Link to="/admin/category/edit">Edit</Link></li>
                        <li><Link to="/admin/category/delete">Delete</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    </>
}

export default SideMenu;
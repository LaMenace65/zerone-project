import {useNavigate} from 'react-router-dom'
import {useEffect, useRef, useState} from "react";
import {userService} from "../../../_services/userService";

const User = () => {
    let navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const flag = useRef(false);

    useEffect(() => {

        if(flag.current === false){
        userService.getAllUsers()
            .then((res) => {
                console.log(res.data)
                setUsers(res.data)
            })
            .catch((err) => console.log(err))
        }

        return () => flag.current = true;
    }, []);


    return <>
        User List
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Identifiant</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Reputation</th>
                    <th>Role</th>
                    <th>Created</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {users.map((user, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user._id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.reputation}</td>
                    <td>{user.createdAt}</td>
                    <td>
                        <button onClick={() => navigate(`/editUser/${user._id}`)}>Edit</button>
                        <button onClick={() => userService.deleteUser(user._id)}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </>
}

export default User;
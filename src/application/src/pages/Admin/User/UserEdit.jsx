import {useParams} from "react-router-dom";

const UserEdit = () => {
    let {id} = useParams();
    console.log(id);

    return <>
        User Edit
    </>
}

export default UserEdit;
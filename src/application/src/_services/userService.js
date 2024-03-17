import Axios from "./callerService";

let getAllUsers = () => {
    return Axios.get('/users')
}

let getUser = (id) => {
    return Axios.get(`/users/`+id)
}

export const userService = {
    getAllUsers,
    getUser
}
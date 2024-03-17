import axios from "axios";
import {accountService} from "./accountService";

const Axios = axios.create({
    baseURL: 'http://localhost:3000/api'
})


Axios.interceptors.request.use(request => {

    if(accountService.isLogged()){
        request.headers.Authorization = 'Bearer '+accountService.getToken()
    }

    return request
})
export default Axios;
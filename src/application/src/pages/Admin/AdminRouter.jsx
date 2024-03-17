import {Route, Routes} from "react-router-dom";
import {AdminLayout, Dashboard} from "./index";
import {User, UserAdd, UserDelete, UserEdit} from "./User";
import {Question, QuestionDelete, QuestionEdit} from "./Question";
import {Category, CategoryAdd, CategoryDelete, CategoryEdit} from "./Category";
import Error from "../../_utils/Error";

const AdminRouter = () => {
    return <>
        <Routes>
            <Route element={<AdminLayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="user">
                    <Route path="index" element={<User/>}/>
                    <Route path="add" element={<UserAdd/>}/>
                    <Route path="edit/:id" element={<UserEdit/>}/>
                    <Route path="delete/:id" element={<UserDelete/>}/>
                </Route>
                <Route path="question">
                    <Route path="index" element={<Question/>}/>
                    <Route path="edit" element={<QuestionEdit/>}/>
                    <Route path="delete" element={<QuestionDelete/>}/>
                </Route>
                <Route path="category">
                    <Route path="index" element={<Category/>}/>
                    <Route path="add" element={<CategoryAdd/>}/>
                    <Route path="edit" element={<CategoryEdit/>}/>
                    <Route path="delete" element={<CategoryDelete/>}/>
                </Route>
                <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>
    </>
}

export default AdminRouter;
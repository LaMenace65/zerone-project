import {Layout, Error, Home, Question, Ranking, Contact, About} from './index'
import {Route, Routes} from "react-router-dom";

const PublicRouter = () => {
    return <>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="home" element={<Home/>}>
                    <Route path="questions" element={<Question/>}/>
                    <Route path="ranking" element={<Ranking/>}/>
                </Route>
                <Route path="contact" element={<Contact/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>
    </>
}

export default PublicRouter;
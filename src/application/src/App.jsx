import {
    createBrowserRouter,
    defer,
    Outlet,
    RouterProvider,
    useRouteError
} from "react-router-dom";
import Profile from "./pages/Profile";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navigation from "./components/Navigation";
import Question from "./pages/Question";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <PageError/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "blogs",
                element: <div className="row">
                    <aside className="col-3">
                        <h2>Sidebar</h2>
                    </aside>
                    <main className="col-9">
                        <Outlet/>
                    </main>
                </div>,
                children: [
                    {
                        path: '',
                        element: <Blogs/>,
                        loader: () => {
                            const posts = fetch('https://jsonplaceholder.typicode.com/posts?_limit=10').then(res => res.json());
                            return defer({
                                posts
                            })
                        }
                    },
                    {
                        path: ':id',
                        element: <Profile/>
                    }
                ]
            },
            {
                path: "questions",
                element: <Question/>
            },
            {
                path: "contact",
                element: <div>Contact</div>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "sign-up",
                element: <SignUp/>
            },
            {
                path: "profile",
                element: <Profile/>
            }
        ]
    }
]);

function PageError() {
    const error = useRouteError();
    console.log(error);
    return <>
        <div>Page not found</div>
        <p>
            {error?.error?.toString() ?? error?.toString()}
        </p>
    </>
}

function Root() {
    return <>
        <Navigation/>
    </>
}

function App() {
    // state
    // comportements
    // render
    return <RouterProvider router={router}/>

}

export default App;
import {
    createBrowserRouter,
    defer,
    NavLink,
    Outlet,
    RouterProvider,
    useNavigation,
    useRouteError
} from "react-router-dom";
import Profile from "./pages/Profile";
import Blogs from "./pages/Blogs";
import Spinner from "./components/Spinner";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <PageError/>,
        children: [
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
    const {state} = useNavigation();
    return <>
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/sign-up">Sign Up</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </nav>
        </header>
        <div className="container my-4">
            {state === 'loading' && <Spinner />}
            <Outlet/>
        </div>
    </>
}

function App() {
    // state
    // comportements
    // render
    return <RouterProvider router={router}/>

}

export default App;
import {useParams} from "react-router-dom";

const Home = () => {
    const {username} = useParams()

    return <>
        <div className="home-container">
            <div className="home-header">
                <h1>Welcome back {username} !</h1>
            </div>
            <div className="home-body">
            </div>
        </div>
    </>
}

export default Home;
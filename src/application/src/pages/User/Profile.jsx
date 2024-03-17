import {useParams} from "react-router-dom";
import ProfileInfo from "../../components/ProfileInfo";
import ConnectedDevices from "../../components/ConnectedDevices";

const Profile = () => {
    const {id, authTokens} = useParams()

    return <>
        <div className="profile-user">
            <h1>Profile {id}</h1>
            <p>This is the profile page</p>
            <ProfileInfo/>
            <h3>Devices connected :</h3>
            <ConnectedDevices devices={authTokens}/>
        </div>
    </>
}

export default Profile;
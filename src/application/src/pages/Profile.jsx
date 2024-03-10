import {useParams} from "react-router-dom";
import ProfileInfo from "../components/ProfileInfo";
import ConnectedDevices from "../components/ConnectedDevices";

export default function Profile(options) {
    const {id, surname, email, reputation, accountCreated, authTokens} = useParams()

    return <div>
        <h1>Profile {id}</h1>

        {/*Liste des informations du compte*/}
        {/*TODO: le mettre en component*/}
        <ProfileInfo/>
        {/*liste des appareils connecté*/}
        {/*TODO: le mettre en component*/}
        <h3>Devices connected :</h3>
        <ConnectedDevices devices={authTokens}/>

        {/*TODO: champ mot de passe avec form afin de pouvoir le modifier*/}
        {/*TODO: Faire une nouvelle page avec le recapitulatif des messages et questions publiés*/}
    </div>
}
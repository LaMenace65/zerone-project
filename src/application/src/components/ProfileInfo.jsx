export default function ProfileInfo(profile) {

    return <>
        <ul>
            <li>ID : {profile.id}</li>
            <li>Surname : {profile.surname}</li>
            <li>Email : {profile.email}</li>
            <li>Reputation : {profile.reputation}</li>
            <li>Account created : {profile.createAt}</li>
        </ul>
    </>
}
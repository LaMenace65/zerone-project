const ProfileInfo = (profile) => {
    return <>
        <ul>
            <li>ID : {profile.id}</li>
            <li>Surname : {profile.username}</li>
            <li>Email : {profile.email}</li>
            <li>Reputation : {profile.reputation}</li>
            <li>Account created : {profile.createAt}</li>
        </ul>
    </>
}

export default ProfileInfo;
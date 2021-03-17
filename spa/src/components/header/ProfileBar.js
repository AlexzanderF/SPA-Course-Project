import { useAuth0 } from '@auth0/auth0-react';

const ProfileBar = () => {
    const { user, logout } = useAuth0();

    return (
        <>
            <div>Logged as [{user.nickname}]</div>
            <button onClick={() => logout({
                returnTo: window.location.origin
            })}>Logout</button>
        </>
    );

}

export default ProfileBar;
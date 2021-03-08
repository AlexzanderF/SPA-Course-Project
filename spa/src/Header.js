import { useAuth0 } from '@auth0/auth0-react';

function Header() {
    const { isAuthenticated, logout, loginWithRedirect, user } = useAuth0();

    async function loginHandler() {
        await loginWithRedirect();
    }
    async function registerHandler() {
        await loginWithRedirect({ screen_hint: 'signup' });
    }

    return isAuthenticated ?
        <>
            <h4>Logged as [{user.nickname}]</h4>
            <button onClick={() => logout({
                returnTo: window.location.origin
            })}>Logout</button>
        </>
        : (
            <div>
                <button onClick={loginHandler}>Login</button>
                <button onClick={registerHandler}>Register</button>
            </div >
        );
}

export default Header;
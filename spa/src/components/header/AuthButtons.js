import { useAuth0 } from '@auth0/auth0-react';

const btnClasses = "text-white font-medium mx-2 p-3 border-2 rounded-2xl bg-green-500 border-green-500";

const AuthButtons = () => {
    const { loginWithRedirect } = useAuth0();

    async function loginHandler() {
        await loginWithRedirect();
    }
    async function registerHandler() {
        await loginWithRedirect({ screen_hint: 'signup' });
    }

    return (
        <div className="ml-auto mr-10">
            <button onClick={loginHandler} className={btnClasses}>Login</button>
            <button onClick={registerHandler} className={btnClasses}>Register</button>
        </div >
    );
}

export default AuthButtons;
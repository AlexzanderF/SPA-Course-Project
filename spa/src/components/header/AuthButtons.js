import { Link } from 'react-router-dom';
const btnClasses = "text-white font-medium mx-2 p-3 border-2 rounded-2xl bg-green-500 border-green-500 shadow-md";

const AuthButtons = () => {

    async function loginHandler() {
    }
    async function registerHandler() {
    }

    return (
        <div className="ml-auto mr-10">
            <Link to="/login" className={btnClasses}>Login</Link>
            <Link to="/register" className={btnClasses}>Register</Link>
        </div >
    );
}

export default AuthButtons;
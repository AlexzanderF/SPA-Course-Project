import { useContext } from 'react';
import { useHistory } from 'react-router';
import UserContext from '../../user-context';

const btnClasses = "text-white font-medium mx-6 p-3 border-2 rounded-2xl bg-green-500 border-green-500 shadow-md";

const ProfileBar = () => {
    const history = useHistory();
    const { setIsAuthenticated } = useContext(UserContext);

    function logoutHandler() {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        history.push('/');
    }

    return (
        <div className="ml-auto flex flex-row items-center">
            <div>Logged as [{'SOME NICKNAME'}]</div>
            <button className={btnClasses} onClick={logoutHandler}>Logout</button>
        </div>
    );

}

export default ProfileBar;
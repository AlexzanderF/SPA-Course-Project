import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../user-context';

const btnClasses = "text-white font-medium mx-6 p-3 border-2 rounded-2xl bg-green-500 border-green-500 shadow-md";

const ProfileBar = () => {
    const history = useHistory();
    const { setIsAuthenticated } = useContext(UserContext);
    const [username] = useState(() => {
        return localStorage['user'] ? JSON.parse(localStorage['user']).username : '';
    });


    function logoutHandler() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('expiresIn');
        setIsAuthenticated(false);
        history.push('/');
    }

    return (
        <div className="ml-auto flex flex-row items-center">
            <div>Logged as [{username}]</div>
            <button className={btnClasses} onClick={logoutHandler}>Logout</button>
        </div>
    );

}

export default ProfileBar;
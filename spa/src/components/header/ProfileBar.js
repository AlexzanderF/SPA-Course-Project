import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../contexts/user-context';

const btnClasses = "text-white font-medium mx-6 p-3 border-2 rounded-2xl bg-green-500 border-green-500 shadow-md";
let initialClasses = "w-16 h-16 border-2 border-white rounded-full text-center text-3xl font-medium flex items-center justify-center";

const ProfileBar = () => {
    const history = useHistory();
    const { setIsAuthenticated } = useContext(UserContext);
    const [username] = useState(() => {
        return localStorage['user'] ? JSON.parse(localStorage['user']).username : '';
    });
    const [profilePicClasses, setProfilePicClasses] = useState(initialClasses);

    useEffect(() => {
        const colors = ["red", "green", "yellow", "orange", "amber", "lime", "emerald", "cyan", "indigo", "purple", "pink", "rose"];
        const randomPick = colors[Math.floor(Math.random() * (colors.length))];
        setProfilePicClasses(profilePicClasses + ` bg-${randomPick}-500`);
    }, []);

    function logoutHandler() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('expiresIn');
        setIsAuthenticated(false);
        history.push('/');
    }
    console.log(profilePicClasses);
    return (
        <div className="ml-auto flex flex-row items-center">
            <div className={profilePicClasses}>
                <span>{username[0].toUpperCase()}</span>
            </div>
            <button className={btnClasses} onClick={logoutHandler}>Logout</button>
        </div>
    );

}

export default ProfileBar;
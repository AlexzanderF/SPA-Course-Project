import { useContext } from 'react';
import AuthButtons from './AuthButtons';
import NavMenu from './NavMenu';
import ProfileBar from './ProfileBar';
import UserContext from '../../contexts/user-context';

const headerClasses = "bg-gray-600 text-white flex flex-row flex-nowrap items-center border-b-4 border-green-500";

function Header() {
    const { isAuthenticated } = useContext(UserContext);

    return (
        <header className={headerClasses}>
            <img src="/logo.png" alt="logo" style={{ width: 145, height: 100, padding: 8 }} />
            <NavMenu isAuthenticated={isAuthenticated} />
            {isAuthenticated ?
                <ProfileBar />
                :
                <AuthButtons />
            }
        </header>
    );
}

export default Header;
import AuthButtons from './AuthButtons';
import NavMenu from './NavMenu';
import ProfileBar from './ProfileBar';

const headerClasses = "bg-gray-600 text-white flex flex-row flex-nowrap items-center justify-between border-b-4 border-green-500";

function Header() {
    return (
        <header className={headerClasses}>
            <img src="/logo.png" alt="logo" style={{ width: 100, height: 100 }} />
            <NavMenu />
            {isAuthenticated ?
                <ProfileBar />
                :
                <AuthButtons />
            }
        </header>
    );
}

export default Header;
import { useAuth0 } from '@auth0/auth0-react';

const btnClasses = "font-medium mx-2 p-3 border-2 border-green-500 bg-green-500 rounded-2xl";

const NavMenu = () => {
    const { isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        return (
            <div className="ml-6 mr-6 flex flex-row">
                <div className={btnClasses}>Home</div>
                <div className={btnClasses}>Workouts</div>
                <div className={btnClasses}>Exercises</div>
                <div className={btnClasses}>About</div>
            </div>
        );
    } else {
        return (
            <div className="ml-6 mr-6 flex flex-row">
                <button className={btnClasses}>Home</button>
                <button className={btnClasses}>About</button>
            </div>
        );
    }
}

export default NavMenu;
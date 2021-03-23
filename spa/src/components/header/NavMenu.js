import { Link } from 'react-router-dom';
const btnClasses = "font-medium mx-2 p-3 border-2 border-green-500 bg-green-500 rounded-2xl shadow-md";

const NavMenu = ({ isAuthenticated }) => {

    if (isAuthenticated) {
        return (
            <div className="ml-6 flex flex-row">
                <div className={btnClasses}><Link to="/">Home</Link></div>
                <div className={btnClasses}><Link to="/workouts">Workouts</Link></div>
                <div className={btnClasses}><Link to="/exercises">Exercises</Link></div>
                <div className={btnClasses}><Link to="/about">About</Link></div>
            </div>
        );
    } else {
        return (
            <div className="ml-6 flex flex-row">
                <button className={btnClasses}><Link to="/">Home</Link></button>
                <button className={btnClasses}><Link to="/about">About</Link></button>
            </div>
        );
    }
}

export default NavMenu;
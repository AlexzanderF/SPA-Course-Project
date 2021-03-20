const btnClasses = "font-medium mx-2 p-3 border-2 border-green-500 bg-green-500 rounded-2xl shadow-md";
const isAuthenticated = true;

const NavMenu = () => {

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
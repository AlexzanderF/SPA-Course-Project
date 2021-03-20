const btnClasses = "text-white font-medium mx-6 p-3 border-2 rounded-2xl bg-green-500 border-green-500 shadow-md";

const ProfileBar = () => {
    function logoutHandler() {
        console.log("FROM LOGOUT HANDLER");
    }

    return (
        <div className="ml-auto flex flex-row items-center">
            <div>Logged as [{'SOME NICKNAME'}]</div>
            <button className={btnClasses} onClick={logoutHandler}>Logout</button>
        </div>
    );

}

export default ProfileBar;
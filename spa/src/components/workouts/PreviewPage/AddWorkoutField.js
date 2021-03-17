const divClasses = "border-2 rounded-3xl bg-green-500 border-green-500 w-4/6 mx-auto p-4 mt-20 flex flex-row content-center cursor-pointer";

const AddWorkout = (props) => {
    function showPopUp() {
        props.showPopUp();
    }
    return (
        <div className={divClasses} onClick={showPopUp}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="mx-auto text-white font-extrabold font-4xl">Add new workout</p>
        </div>
    );
}

export default AddWorkout;
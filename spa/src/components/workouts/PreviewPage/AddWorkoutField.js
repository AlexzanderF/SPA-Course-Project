import PlusIcon from '../../Icons/PlusIcon';

const divClasses = "border-2 rounded-3xl bg-green-500 border-green-500 w-4/6 mx-auto p-4 mt-20 flex flex-row content-center cursor-pointer shadow-xl";

const AddWorkout = (props) => {

    return (
        <div className={divClasses} onClick={() => props.showPopUp()}>
            <PlusIcon />
            <p className="mx-auto text-white font-extrabold text-xl">Add new workout</p>
        </div>
    );
}

export default AddWorkout;
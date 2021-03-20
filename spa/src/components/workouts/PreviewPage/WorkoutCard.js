import { useEffect, useState } from "react";

const divClasses = "border-2 border-green-500 rounded bg-green-500 p-4 overflow-hidden shadow-lg text-white cursor-pointer";

const WorkoutCard = (props) => {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        let newDate = new Date(props.createdAt).toLocaleDateString('en-GB');
        setFormattedDate(newDate);
    }, [props.createdAt]);

    function handleRedirect() {

    }

    return (
        <div className={divClasses} onClick={handleRedirect}>
            <h2 className="font-extrabold">{props.name}</h2>
            <div className="font-medium">Date: {formattedDate || '...'}</div>
            <h2 className="font-medium mt-2">Click to edit</h2>
        </div>
    );
}

export default WorkoutCard;
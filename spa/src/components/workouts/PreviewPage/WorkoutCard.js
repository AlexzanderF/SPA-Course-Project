import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

const divClasses = "border-2 border-green-500 rounded bg-green-500 p-4 overflow-hidden shadow-lg text-white cursor-pointer";

const WorkoutCard = (props) => {
    const history = useHistory();
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        let newDate = new Date(props.createdAt).toLocaleDateString('en-GB');
        setFormattedDate(newDate);
    }, [props.createdAt]);

    function handleRedirect() {
        history.push(`/workouts/${props._id}`);
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
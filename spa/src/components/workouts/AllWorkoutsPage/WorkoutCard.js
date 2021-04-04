import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const WorkoutCard = ({ _id, name, createdAt, exerciseCount }) => {
    const history = useHistory();
    const [date, setDate] = useState();

    useEffect(() => {
        let newDate = new Date(createdAt).toLocaleDateString('en-GB');
        setDate(newDate);
    }, [createdAt]);

    function handleRedirect() {
        history.push(`/workouts/${_id}`);
    }

    return (
        <div className="mx-auto w-3/4 mb-6 p-4 border-2 border-green-500 rounded bg-green-500 overflow-hidden shadow-lg text-white cursor-pointer" onClick={handleRedirect}>
            <div className="font-extrabold text-xl mb-2">{name}</div>
            <div className="font-bold">{date}</div>
            <div className="font-bold">Exercises: {exerciseCount}</div>
        </div>
    );
}

export default WorkoutCard;
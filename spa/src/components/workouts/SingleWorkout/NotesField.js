import { useState, useContext } from 'react';
import { addWorkoutNotes } from '../../../services/apiService';
import WorkoutDataContext from '../../../workoutData-context';

const NotesField = () => {
    const { workoutInfo, setWorkoutInfo } = useContext(WorkoutDataContext);
    const [notes, setNotes] = useState(workoutInfo.notes);
    const [error, setError] = useState('');

    function submitNotes() {
        const { id } = workoutInfo;
        if (notes.length >= 200) {
            setError('Too long (max 200 chars)');
            return;
        }
        addWorkoutNotes(id, notes)
            .then(() => {
                setError('');
            })
            .catch(err => console.log(err));
        setWorkoutInfo({ ...workoutInfo, notes });
    }

    return (
        <div className="w-5/6 mt-10 mx-auto flex flex-col">
            <h1 className="font-semibold text-xl mb-2">Notes:</h1>
            <textarea name="notes" id="notes" rows="3"
                className="border-2 border-gray-700 w-1/3"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            />
            {error ? <h1 className="text-red-500">{error}</h1> : null}
            <button className="border-2 rounded-xl border-green-500 bg-green-500 text-white font-semibold p-1 ml-1 mt-2 w-20" onClick={submitNotes}>Save</button>
        </div>
    );
}

export default NotesField;
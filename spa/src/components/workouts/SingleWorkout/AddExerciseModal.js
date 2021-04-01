import { useState } from 'react';

const AddExerciseModal = ({ }) => {
    const [exerciseName, setExerciseName] = useState();

    return (
        <div>
            <label htmlFor="exerciseName">Exercise: </label>
            <input type="text" name="exerciseName" id="exerciseName" value={exerciseName} onChange={(e) => setExerciseName(e.target.value)} />
        </div>
    );
}

export default AddExerciseModal;
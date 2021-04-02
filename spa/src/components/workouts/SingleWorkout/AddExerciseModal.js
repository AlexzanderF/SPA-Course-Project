import { useState, useContext } from 'react';
import PlusIcon from '../../Icons/PlusIcon';
import { addExercise } from '../../../services/apiService';
import WorkoutDataContext from '../../../workoutData-context';

const AddExerciseModal = ({ closeModal }) => {
    const { workoutInfo, exercises, setExercises } = useContext(WorkoutDataContext);
    const [exerciseName, setExerciseName] = useState('');

    function addNewExercise() {
        if (exerciseName.length > 4) {
            addExercise(workoutInfo.id, exerciseName)
                .then(() => {
                    setExercises(Object.assign({}, exercises, { [exerciseName]: [] }));
                    closeModal();
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="mx-auto ml-6 p-1 w-2/3">
            <label htmlFor="exerciseName" className="font-semibold">Exercise Name: </label>
            <input type="text" name="exerciseName" id="exerciseName" value={exerciseName} onChange={(e) => setExerciseName(e.target.value)} className="border-2 border-gray-500 rounded-md ml-1 w-2/3 p-1" />
            <div onClick={addNewExercise} className="w-8 h-8 float-right">
                <PlusIcon className="mt-0.5" />
            </div>
        </div>
    );
}

export default AddExerciseModal;
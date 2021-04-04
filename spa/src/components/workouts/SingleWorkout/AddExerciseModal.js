import { useState, useContext, useRef } from 'react';
import PlusIcon from '../../Icons/PlusIcon';
import { addExercise } from '../../../services/apiService';
import WorkoutDataContext from '../../../workoutData-context';

const AddExerciseModal = ({ closeModal }) => {
    const inputElem = useRef();
    const { workoutInfo, exercises, setExercises } = useContext(WorkoutDataContext);
    const [exerciseName, setExerciseName] = useState('');

    function addNewExercise() {
        if (exerciseName.length < 3) {
            setExerciseName('');
            inputElem.current.placeholder = "Min 3 chars";
            inputElem.current.classList.add("placeholder-red-400");
        } else if (!/^[A-Za-z][\w -]*$/g.test(exerciseName)) {
            setExerciseName('');
            inputElem.current.placeholder = "Must start with a letter";
            inputElem.current.classList.add("placeholder-red-400");
        } else {
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
            <input type="text" name="exerciseName" id="exerciseName"
                className="border-2 border-gray-500 rounded-md ml-1 w-2/3 p-1"
                value={exerciseName}
                onChange={(e) => setExerciseName(e.target.value)}
                ref={inputElem}
            />
            <div onClick={addNewExercise} className="w-8 h-8 float-right">
                <PlusIcon className="mt-0.5 hover:scale-125" />
            </div>
        </div>
    );
}

export default AddExerciseModal;
import { useState, useContext } from 'react';
import SetBar from './SetBar';
import CloseIcon2 from '../../Icons/CloseIcon2';
import { deleteExerciseSet, addNewSet, deleteExercise } from '../../../services/apiService';
import WorkoutDataContext from '../../../workoutData-context';

const ExerciseField = ({ removeExercise, ...props }) => {
    const currentWorkoutData = useContext(WorkoutDataContext);
    const [sets, setSets] = useState(props.sets);

    function removeSet(setId) {
        if (typeof setId === 'string') {
            const workoutId = currentWorkoutData.id;
            const exerciseName = props.children;
            deleteExerciseSet(workoutId, exerciseName, setId).then(() => {
                let filtered = sets.filter(x => x.id !== setId);
                console.log(filtered);
                setSets(filtered);
            })
                .catch(err => console.log(err));
        } else {
            let arr = [...sets];
            arr.splice(setId, 1);
            setSets(arr);
        }
    }

    function addSetBar() {
        setSets((prev) => [...prev, {}]);
    }

    function createSet(reps, weight) {
        const workoutId = currentWorkoutData.id;
        const exerciseName = props.children;
        addNewSet(workoutId, exerciseName, { reps, weight })
            .then(({ newSet }) => {
                let filteredSets = sets.filter(x => Object.keys(x).length !== 0);
                setSets((prev) => [...filteredSets, newSet]);
            })
            .catch(err => console.log(err));
    }

    function removeExercise() {
        deleteExercise(currentWorkoutData.id, props.children)
            .then((remaining) => {

            })
            .catch(err => console.log(err));
    }

    return (
        <div className="mb-6 border-2 border-green-500 shadow-lg rounded-lg">
            <div className="pl-6 p-2 text-xl border-b-2 border-green-500 bg-green-500 text-white font-semibold">
                {props.children}
                <CloseIcon2 className="mt-0.5 rounded bg-red-500 float-right inline" onClick={removeExercise} />
            </div>
            <div className="px-8 py-4">
                <div className="flex flex-row w-2/3 text-lg font-medium">
                    <div className="w-1/5">Set</div>
                    <div className="w-2/5">Weight(kg)</div>
                    <div className="w-2/5">Reps</div>
                </div>
                <div className="flex flex-col w-2/3 mt-2">
                    {sets.map((set, index) => {
                        return <SetBar
                            key={set.id || index}
                            index={index}
                            setInfo={{ ...set }}
                            {...{ removeSet, createSet }}
                        />;
                    })}
                </div>
                <button className="border-2 rounded-xl border-green-500 bg-green-500 text-white font-semibold p-1 mt-4" onClick={addSetBar}>Add Set</button>
            </div>
        </div>
    );
}

export default ExerciseField;
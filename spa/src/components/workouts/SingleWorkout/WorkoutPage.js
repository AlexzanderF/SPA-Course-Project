import { useEffect, useState } from 'react';
import Spinner from '../../Icons/Spinner';
import ExerciseField from './ExerciseField';
import NotesField from './NotesField';
import AddExerciseModal from './AddExerciseModal';
import { getWorkoutData, deleteExercise } from '../../../services/apiService';
import WorkoutDataContext from '../../../workoutData-context';

const WorkoutPage = ({ match: { params: { id } } }) => {
    const [workoutInfo, setWorkoutInfo] = useState({});
    const [exercises, setExercises] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [showAddExerciseModal, setShowAddExerciseModal] = useState(false);

    useEffect(() => {
        getWorkoutData(id)
            .then((data) => {
                const { name, _id, notes } = data;
                let createdAt = new Date(data.createdAt).toLocaleDateString('en-GB');
                setWorkoutInfo({
                    createdAt,
                    name,
                    id: _id,
                    notes
                });
                setExercises(data.exercises);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, [id]);

    function removeExercise(exercise) {
        const { id } = workoutInfo;
        deleteExercise(id, exercise)
            .then(() => {
                let copy = Object.assign({}, exercises);
                delete copy[exercise];
                setExercises(copy);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            { isLoading ? <Spinner /> :
                <WorkoutDataContext.Provider value={{ workoutInfo, setWorkoutInfo, exercises, setExercises }}>
                    <div className="mx-auto w-1/2 text-center border-b-2 border-green-500">
                        <h1 className="text-3xl m-3 font-semibold">Workout: {workoutInfo.name}</h1>
                        <h2 className="text-xl m-3">Date: {workoutInfo.createdAt}</h2>
                    </div>
                    <div className="mt-10 mx-auto p-5 w-5/6 flex flex-col flex-wrap">
                        {exercises ?
                            Object.keys(exercises).map((exercise) => {
                                return <ExerciseField key={exercise} sets={exercises[exercise]} removeExercise={removeExercise}>
                                    {exercise}
                                </ExerciseField>;
                            })
                            :
                            <h1 className="mx-auto">No exercises...</h1>
                        }
                    </div>
                    <div className="w-3/5 ml-40 flex flex-row items-center">
                        <div className="w-1/3 bg-green-500 rounded-lg p-2 text-center text-white font-semibold cursor-pointer"
                            onClick={() => showAddExerciseModal ? setShowAddExerciseModal(false) : setShowAddExerciseModal(true)}>
                            Add Exercise
                        </div>
                        {showAddExerciseModal ? <AddExerciseModal closeModal={() => setShowAddExerciseModal(false)} /> : null}
                    </div>
                    <NotesField />
                </WorkoutDataContext.Provider>
            }
        </div>
    );
}

export default WorkoutPage;
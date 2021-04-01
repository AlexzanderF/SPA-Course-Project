import { useEffect, useState } from 'react';
import Spinner from '../../Icons/Spinner';
import ExerciseField from './ExerciseField';
import NotesField from './NotesField';
import { getWorkoutData, deleteExercise } from '../../../services/apiService';
import WorkoutDataContext from '../../../workoutData-context';

const WorkoutPage = ({ match: { params: { id } } }) => {
    const [workoutInfo, setWorkoutInfo] = useState({});
    const [exercises, setExercises] = useState();
    const [isLoading, setIsLoading] = useState(true);

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

    function removeExercise(id, exercise) {
        deleteExercise(id, exercise)
            .then(({ remainingExercises }) => {
                if (remainingExercises) {
                    setExercises(remainingExercises);
                } else {
                    setExercises(null);
                }
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
                                return <ExerciseField key={exercise} sets={exercises[exercise]} setExercises={setExercises}>
                                    {exercise}
                                </ExerciseField>;
                            })
                            :
                            <h1 className="mx-auto">No exercises...</h1>
                        }
                    </div>
                    <div className="w-2/6 mx-auto pl-5">Add Exercise</div>
                    <NotesField />
                </WorkoutDataContext.Provider>
            }
        </div>
    );
}

export default WorkoutPage;
import { useEffect, useState } from 'react';
import Spinner from '../../Icons/Spinner';
import ExerciseField from './ExerciseField';
import { getWorkoutData } from '../../../services/apiService';
import WorkoutDataContext from '../../../workoutData-context';

const WorkoutPage = ({ match: { params: { id } } }) => {
    const [workoutInfo, setWorkoutInfo] = useState({});
    const [exercises, setExercises] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getWorkoutData(id)
            .then((data) => {
                const { name, _id } = data;
                let createdAt = new Date(data.createdAt).toLocaleDateString('en-GB');
                setWorkoutInfo({
                    createdAt,
                    name,
                    id: _id
                });
                setExercises(data.exercises);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, [id]);


    return (
        <div>
            { isLoading ? <Spinner /> :
                <WorkoutDataContext.Provider value={workoutInfo}>
                    <div className="mx-auto w-1/2 text-center border-b-2 border-green-500">
                        <h1 className="text-3xl m-3 font-semibold">Workout: {workoutInfo.name}</h1>
                        <h2 className="text-xl m-3">Date: {workoutInfo.createdAt}</h2>
                    </div>
                    <div className="mt-10 mx-auto p-5 w-5/6 flex flex-col flex-wrap">
                        {Object.keys(exercises).map((exercise) => {
                            return <ExerciseField key={exercise} sets={exercises[exercise]} >
                                {exercise}
                            </ExerciseField>;
                        })}
                    </div>
                    <div className="w-2/6 mx-auto pl-5">Add Exercise</div>
                </WorkoutDataContext.Provider>
            }
        </div>
    );
}

export default WorkoutPage;
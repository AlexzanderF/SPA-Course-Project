import { useEffect, useState } from 'react';
import { getMostRecentWorkouts } from '../../../services/apiService';
import Spinner from '../../Icons/Spinner';
import WorkoutCard from './WorkoutCard';

const AllWorkoutsPage = () => {
    const [workouts, setWorkouts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getMostRecentWorkouts(10)
            .then((data) => {
                setWorkouts(data);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="container mx-auto mt-20">
            {
                isLoading ? <Spinner /> :
                    <div>
                        <h1 className="mx-auto w-3/4 mb-6 text-2xl font-bold">My workouts:</h1>
                        <div className="flex flex-col">
                            {workouts.map((w) => {
                                return <WorkoutCard key={w._id} {...w} />;
                            })}
                        </div>
                    </div>
            }
        </div>
    );
}

export default AllWorkoutsPage;
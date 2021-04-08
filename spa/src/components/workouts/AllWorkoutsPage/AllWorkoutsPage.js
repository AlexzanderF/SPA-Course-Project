import { useEffect, useState } from 'react';
import { getMostRecentWorkouts, getWorkoutsAfterDate } from '../../../services/apiService';
import Spinner from '../../Icons/Spinner';
import WorkoutCard from './WorkoutCard';

const AllWorkoutsPage = () => {
    const [workouts, setWorkouts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getMostRecentWorkouts(1)
            .then((data) => {
                setWorkouts(data);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    function loadMore() {
        let lastDate = workouts[workouts.length - 1].createdAt;
        console.log(lastDate);
        setIsLoading(true);
        getWorkoutsAfterDate(1, lastDate)
            .then((data) => {
                setWorkouts((prev) => [...prev, ...data]);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }

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
            <p className="mt-4 ml-48 text-lg font-bold hover:underline cursor-pointer" onClick={loadMore}>Load more workouts...</p>
        </div>
    );
}

export default AllWorkoutsPage;
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WorkoutCard from './WorkoutCard';
import Spinner from '../../Icons/Spinner';
import * as apiService from '../../../services/apiService';

const MostRecentTab = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        apiService.getMostRecentWorkouts(3)
            .then((recentWorkouts) => {
                if (recentWorkouts) {
                    setWorkouts(recentWorkouts);
                    setIsLoading(false);
                }
            });
    }, []);

    return (
        <>
            {
                isLoading ? <Spinner /> :
                    (workouts.length > 0 ?
                        <>
                            <div className="grid grid-cols-3 gap-4">
                                {workouts.map(x => {
                                    return <WorkoutCard key={x._id} {...x} />;
                                })}
                            </div>
                            <Link to="/calendar">See all workouts...</Link>
                        </> :
                        <h3 className="text-center">No current workouts...</h3>
                    )
            }
        </>
    );
}

export default MostRecentTab;
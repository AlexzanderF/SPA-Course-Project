import { useState, useEffect } from 'react';
import AddWorkoutField from './AddWorkoutField';
import RecentTab from './RecentTab';
import CreateFormModal from './CreateFormModal';
import Spinner from '../../icons/Spinner';
import * as apiService from '../../../services/apiService';

const WorkoutsPreviewPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [workouts, setWorkouts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

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
        <div>
            <h1 className="text-2xl p-2">Last three workouts: </h1>
            {
                workouts.length > 0 ?
                    (isLoading ? <Spinner /> :
                        <>
                            <RecentTab workouts={workouts} />
                            <a href="">See all workouts...</a>
                        </>
                    )
                    :
                    <h3 className="text-center">No current workouts...</h3>
            }
            <AddWorkoutField showPopUp={() => setIsOpen(true)} />
            <CreateFormModal trigger={isOpen} closeModal={() => setIsOpen(false)} />
        </div>
    );
}

export default WorkoutsPreviewPage;
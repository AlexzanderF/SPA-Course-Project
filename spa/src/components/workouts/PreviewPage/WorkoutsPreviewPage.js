import { useState, useEffect } from 'react';
import AddWorkoutField from './AddWorkoutField';
import RecentTab from './RecentTab';
import Modal from './Modal';
import * as apiService from '../../../services/apiService';

const WorkoutsPreviewPage = () => {
    const [workouts, setWorkouts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        apiService.getMostRecentWorkouts(3)
            .then((recentWorkouts) => {
                if (recentWorkouts) {
                    setWorkouts(recentWorkouts);
                }
            });
    }, []);

    return (
        <div className="container mx-auto mt-20">
            <h1 className="text-2xl p-2">Last three workouts: </h1>
            {workouts.length > 0 ?
                <>
                    <RecentTab workouts={workouts} />
                    <a href="">See all workouts...</a>
                </>
                :
                <h3 className="text-center">No current workouts...</h3>
            }
            <AddWorkoutField showPopUp={() => setIsOpen(true)} />
            {isOpen && <Modal closeModal={() => setIsOpen(false)} />}
        </div>
    );
}

export default WorkoutsPreviewPage;
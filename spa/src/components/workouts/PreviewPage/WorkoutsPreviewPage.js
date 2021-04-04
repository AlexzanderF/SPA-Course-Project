import { useState } from 'react';
import AddWorkoutField from './AddWorkoutField';
import RecentTab from './RecentTab';
import CreateFormModal from './CreateFormModal';

const WorkoutsPreviewPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="container mx-auto mt-20">
            <h1 className="text-2xl p-2">Last three workouts: </h1>
            <RecentTab />
            <AddWorkoutField showPopUp={() => setIsOpen(true)} />
            <CreateFormModal trigger={isOpen} closeModal={() => setIsOpen(false)} />
        </div>
    );
}

export default WorkoutsPreviewPage;
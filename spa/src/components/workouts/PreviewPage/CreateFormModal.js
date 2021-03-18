import CloseIcon from '../../icons/CloseIcon';
import { useState } from 'react';

const CreateForm = ({ closeModal, trigger }) => {
    const [workoutName, setWorkoutName] = useState('');
    const [description, setDescription] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log('REDIRECT AND USE SERVICE');
    }

    if (trigger) {
        return (
            <div className="border-4 border-gray-400 rounded-2xl mx-auto mt-20 p-4 w-1/2     max-h-96">
                <div onClick={() => closeModal()}>
                    <CloseIcon />
                </div>
                <form onSubmit={handleSubmit} className="mt-10 px-10 flex flex-col">
                    <label htmlFor="name">Workout name:
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="border-2 border-gray-600"
                            value={workoutName}
                            onChange={(e) => setWorkoutName(e.target.value)} />
                    </label>
                    <label htmlFor="description">Description:
                        <textarea
                            name="description"
                            id="description"
                            className="border-2 border-gray-600"
                            value={description}
                            onChange={(e) => setDescription(e.target.values)} />
                    </label>
                    <button type="submit" className="mx-auto text-white font-medium p-2 rounded-2xl bg-green-500 shadow-md">Create</button>
                </form>
            </div>
        );
    }
    return null;
}

export default CreateForm;
import CloseIcon from '../../Icons/CloseIcon';
import { useState } from 'react';

const CreateForm = ({ closeModal, trigger }) => {
    const [workoutName, setWorkoutName] = useState('');
    const [type, setType] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log('REDIRECT AND USE SERVICE');
    }

    function handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        switch (name) {
            case 'workoutName':
                setWorkoutName(value);
                break;
            case 'type':
                setType(value);
                console.log(value);
                break;
        }
    }

    if (trigger) {
        return (
            <div className="border-4 border-gray-400 rounded-2xl mx-auto mt-20 p-4 w-1/2 shadow-lg max-h-96">
                <div onClick={() => closeModal()}>
                    <CloseIcon />
                </div>
                <form onSubmit={handleSubmit} className="mt-10 px-10 flex flex-col">
                    <div className="mb-4 text-xl">
                        <label htmlFor="name" className="mr-2">Workout name:
                        </label>
                        <input
                            type="text"
                            name="workoutName"
                            id="name"
                            className="border-2 border-gray-500"
                            value={workoutName}
                            onChange={handleChange} />
                    </div>
                    <div className="mb-4 text-xl">
                        <label htmlFor="type" className="mr-4">Workout type:
                        </label>
                        <select
                            name="type"
                            id="type"
                            value={type}
                            onChange={handleChange}
                            className="border-2 border-gray-500">
                            <option value="weightlifting">Weightlifting</option>
                            <option value="cardio">Cardio</option>
                        </select>
                    </div>
                    <button type="submit" className="mx-auto text-white font-medium p-2 rounded-2xl bg-green-500 shadow-md">Create</button>
                </form>
            </div>
        );
    }
    return null;
}

export default CreateForm;
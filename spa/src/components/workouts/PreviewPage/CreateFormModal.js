import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import CloseIcon from '../../Icons/CloseIcon';
import { createNewWorkout } from '../../../services/apiService';

const CreateForm = ({ closeModal, trigger }) => {
    const history = useHistory();
    const nameInputRef = useRef();
    const [workoutName, setWorkoutName] = useState('');
    const [type, setType] = useState('weightlifting');

    function handleSubmit(e) {
        e.preventDefault();
        if (workoutName === '') {
            nameInputRef.current.focus();
            nameInputRef.current.placeholder = "Required";
            nameInputRef.current.classList.add("placeholder-red-400");
            return;
        }
        createNewWorkout({ workoutName, type })
            .then(({ id }) => {
                console.log(id);
                history.push(`/workouts/${id}`);
            })
            .catch(err => console.log(err));
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
            default:
                console.log(name);
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
                            ref={nameInputRef}
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
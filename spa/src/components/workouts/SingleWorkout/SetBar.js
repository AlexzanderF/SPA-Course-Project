import { useState } from 'react';

const SetBar = ({ setInfo, removeSet }) => {
    const [weight, setWeight] = useState(setInfo.weight);
    const [reps, setReps] = useState(setInfo.reps);

    function submitSet() {

    }

    function clearSet() {
        removeSet(setInfo.index);
    }

    return (
        <div className="flex flex-row mb-2">
            <div className="w-1/5 font-bold">{setInfo.index + 1}</div>
            <div className="w-2/5 ml-2">
                <input type="text" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} className="border-2 border-gray-500 w-1/3 rounded-lg" />
            </div>
            <div className="w-2/5 ml-3">
                <input type="text" name="reps" value={reps} onChange={(e) => setReps(e.target.value)} className="border-2 border-gray-500 w-1/3 rounded-lg" />
            </div>
            <div className="flex flew-row">
                <img src="/check-circle.svg" alt="icon" className="w-7 hover:bg-green-400 rounded-full cursor-pointer" onClick={submitSet} />
                <img src="/close-circle.svg" alt="icon" className="w-7 hover:bg-red-400 rounded-full cursor-pointer" onClick={clearSet} />
            </div>
        </div>
    );
}

export default SetBar;
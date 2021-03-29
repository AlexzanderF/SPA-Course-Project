import { useState } from 'react';
import SetBar from './SetBar';

const ExerciseField = (props) => {
    const [sets, setSets] = useState(props.sets);

    function removeSet(index) {
        let removed = sets.splice(index, 1);
        console.log(sets);
        // REMOVE FROM DB AND THEN UPDATE STATE !!!
        setSets();
    }

    return (
        <div className="mb-6 border-2 border-green-500 shadow-lg rounded-lg">
            <div className="pl-6 p-2 text-xl border-b-2 border-green-500 bg-green-500 text-white font-semibold">
                {props.children}
            </div>
            <div className="px-8 py-4">
                <div className="flex flex-row w-2/3 text-lg font-medium">
                    <div className="w-1/5">Set</div>
                    <div className="w-2/5">Weight(kg)</div>
                    <div className="w-2/5">Reps</div>
                </div>
                <div className="flex flex-col w-2/3 mt-2">
                    {sets.map((set, index) => {
                        console.log(set);
                        return <SetBar key={set.id} setInfo={{ ...set, index }} removeSet={removeSet} />;
                    })}
                </div>
                <button className="border-2 rounded-xl border-green-500 bg-green-500 text-white font-semibold p-1 mt-4">Add Set</button>
            </div>
        </div>
    );
}

export default ExerciseField;
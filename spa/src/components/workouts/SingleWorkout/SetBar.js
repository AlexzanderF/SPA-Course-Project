import { useState, useRef } from 'react';
let greenCheckClasses = "w-7 hover:bg-green-400 rounded-full cursor-pointer shadow";

const SetBar = ({ setInfo, removeSet, createSet, index }) => {
    const greenCheckElem = useRef();
    const [weight, setWeight] = useState(setInfo ? setInfo.weight : null);
    const [reps, setReps] = useState(setInfo ? setInfo.reps : null);

    function submitSet() {
        try {
            if (reps > 0 && typeof reps === 'number' && weight > 0 && typeof weight === 'number') {
                createSet(reps, weight);
            }
        } catch (error) {
            console.log(error);
        }
    }

    function clearSet() {
        removeSet(setInfo.id || index);
    }

    return (
        <div className="flex flex-row mb-2">
            <div className="w-1/5 font-bold">{index + 1}</div>
            <div className="w-2/5 ml-2">
                <input type="number" name="weight" value={weight || ''} onChange={(e) => setWeight(Math.max(0, e.target.value))} className="border-2 border-gray-500 w-1/3 rounded-lg" />
            </div>
            <div className="w-2/5 ml-3">
                <input type="number" name="reps" value={reps || ''} onChange={(e) => setReps(Math.max(0, e.target.value))} className="border-2 border-gray-500 w-1/3 rounded-lg" />
            </div>
            <div className="flex flew-row">
                {
                    setInfo.id ?
                        (<img src="/check-circle.svg" alt="icon" className={greenCheckClasses + ' bg-green-400'} ref={greenCheckElem} />)
                        :
                        (<img src="/check-circle.svg" alt="icon" className={greenCheckClasses} onClick={submitSet} ref={greenCheckElem} />)
                }
                <img src="/close-circle.svg" alt="icon" className="w-7 hover:bg-red-400 rounded-full cursor-pointer" onClick={clearSet} />
            </div>
        </div>
    );
}

export default SetBar;
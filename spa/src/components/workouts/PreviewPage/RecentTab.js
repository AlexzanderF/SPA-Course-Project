import WorkoutCard from './WorkoutCard';

const MostRecentTab = (props) => {

    return (
        <div className="grid grid-cols-3 gap-4">
            {props.workouts.map(x => {
                return <WorkoutCard key={x._id} {...x} />;
            })}
        </div>
    );
}

export default MostRecentTab;
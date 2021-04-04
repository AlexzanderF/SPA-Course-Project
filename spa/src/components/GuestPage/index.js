import { Link } from 'react-router-dom'

const GuestPage = () => {
    return (
        <>
            <div className="bg-guest-page h-screen bg-center bg-no-repeat bg-cover relative">
            </div>
            <div className="w-full text-center absolute top-1/3">
                <p className="text-orange-400 font-bold text-6xl">Workout Tracker for Weightlifters</p>
                <p className="text-white font-semibold text-3xl mt-5">
                    <Link to="/register" className="underline">Sign Up</Link> or <Link to="/login" className="underline">Sign In</Link> to use the app
                </p>
            </div>
        </>
    );
}

export default GuestPage;
const AboutPage = () => {
    return (
        <div className="container mx-auto mt-20">
            <h1 className="mb-20 pb-4 w-1/3 mx-auto text-center text-3xl font-semibold border-b-2 border-green-500">About the App</h1>
            <p className="text-center text-xl font-medium"><span className="text-orange-500">STRONG</span> is simple and effective Web App for logging and tracking your workouts and training sessions.</p>
            <p className="text-center text-xl font-medium">Data entry and arrangement is fast, with easy to use UI. Complete history of your workouts is also available.</p>
            <p className="mt-3 text-center text-xl font-medium">Many more features are coming in the near future such as: </p>
            <ul className="mt-7 text-center text-lg">
                <li> 1) Charts to monitor progress for every exercise</li>
                <li> 2) Profile page with info about the user</li>
                <li> 3) Calendar for easier history management</li>
                <li> 4) A huge list of built-in exercises to choose from    </li>
            </ul>
        </div>
    );
}

export default AboutPage;
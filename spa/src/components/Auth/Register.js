import { useState } from 'react';

const inputClasses = "w-1/2 p-2 mb-5 rounded-3xl border-2 border-green-500 shadow-lg focus:outline-none focus:border-2 focus:border-gray-600";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function registerHandler(e) {
        e.preventDefault();
        console.log(username);
        console.log(password);
    }

    return (
        <div className="border-2 bg-green-500 border-green-500 rounded-3xl text-center w-1/2 mx-auto shadow-xl">
            <h1 className="text-3xl font-medium mt-3">Sign Up</h1>
            <form onSubmit={registerHandler} className="p-10 text-center">
                <div className="">
                    {/* <label htmlFor="username">Username</label> */}
                    <input type="text" name="username" id="username" placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={inputClasses} />
                </div>
                <div>
                    {/* <label htmlFor="password">Password</label> */}
                    <input type="text" name="password" id="password" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={inputClasses} />
                </div>
                <button type="submit" className="mt-5">Sign Up</button>
            </form>
        </div>
    );
}

export default Register;
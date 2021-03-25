import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../../services/authService';
import UserContext from '../../user-context';

const inputClasses = "w-1/2 p-2 mb-5 rounded-3xl border-2 border-green-500 shadow-lg focus:border-2 focus:border-gray-600";
const errorBoxClasses = "text-white font-semibold border-2 border-white rounded-2xl bg-rose-500 w-1/3 mx-auto shadow-md";

const RegisterPage = () => {
    const history = useHistory();
    const Context = useContext(UserContext);
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function registerHandler(e) {
        e.preventDefault();
        if (email === '' || password === '' || username === '') {
            setError('Fill all input fields');
            return;
        }
        registerUser(username, email, password)
            .then(user => {
                localStorage.setItem('token', user.token);
                localStorage.setItem('user', JSON.stringify({
                    username: user.username,
                    email: user.email
                }));
                Context.setIsAuthenticated(true);
                history.push('/');
            })
            .catch(err => {
                console.log(err);
                setError(err.msg);
            });
    }

    return (
        <div className="border-2 bg-green-500 border-green-500 rounded-3xl text-center w-1/2 mx-auto shadow-xl">
            <h1 className="text-3xl font-medium mt-3 text-gray-800">Sign In</h1>
            <form onSubmit={registerHandler} className="p-10 text-center">
                <div>
                    <input type="text" name="email" id="email" placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClasses} />
                </div>
                <div>
                    <input type="text" name="username" id="username" placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={inputClasses} />
                </div>
                <div>
                    <input type="password" name="password" id="password" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={inputClasses} />
                </div>
                {error && (<div className={errorBoxClasses}>{error}</div>)}

                <button type="submit" className="mt-5 p-2 border-2 border-warmGray-50 bg-warmGray-50 rounded-xl shadow-lg text-gray-800 focus:outline-none">Sign Up</button>
            </form>
        </div>
    );
}

export default RegisterPage;
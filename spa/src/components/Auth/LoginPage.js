import { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { loginUser } from '../../services/authService';
import UserContext from '../../user-context';

const inputClasses = "w-1/2 p-2 mb-5 rounded-3xl border-2 border-green-500 shadow-lg focus:outline-none focus:border-2 focus:border-gray-600";
const errorBoxClasses = "";

const LoginPage = () => {
    const history = useHistory();
    const Context = useContext(UserContext);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function loginHandler(e) {
        e.preventDefault();
        loginUser(email, password)
            .then(user => {
                localStorage.setItem('token', user.token);
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
            <form onSubmit={loginHandler} className="p-10 text-center">
                <div>
                    <input type="text" name="email" id="email" placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClasses} />
                </div>
                <div>
                    <input type="password" name="password" id="password" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={inputClasses} />
                </div>
                {error && (<div className="text-white font-semibold border-2 border-white rounded-2xl bg-rose-500 w-1/3 mx-auto shadow-md">{error}</div>)}

                <button type="submit" className="mt-5 p-2 border-2 border-warmGray-50 bg-warmGray-50 rounded-xl shadow-lg text-gray-800 focus:outline-none">Sign In</button>
            </form>
        </div>
    );
}

export default LoginPage;
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function submitHandler() {

    }

    return (
        <div>
            <form onSubmit={ }>
                <div>
                    {/* <label htmlFor="username">Username</label> */}
                    <input type="text" name="username" id="username" placeholder="Username" />
                </div>
                <div>
                    {/* <label htmlFor="password">Password</label> */}
                    <input type="text" name="password" id="password" placeholder="Password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
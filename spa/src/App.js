import './App.css';
import Header from './Header';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
    const { isLoading, error } = useAuth0();

    if (isLoading) {
        return (
            <h2 style={{ textAlign: 'center' }}>Logging in...</h2>
        );
    }

    if (error) {
        return (
            <h2>{error.message}</h2>
        );
    }

    return (
        <Header />
    );
}

export default App;

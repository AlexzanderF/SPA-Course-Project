import './App.css';
import Header from './components/header/Header';
import WorkoutsPreviewPage from './components/workouts/PreviewPage/WorkoutsPreviewPage';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
    const { error } = useAuth0();

    // if (isLoading) {
    //     return (
    //         <h2 style={{ textAlign: 'center' }}>Logging in...</h2>
    //     );
    // }

    if (error) {
        console.error(error);
    }

    return (
        <>
            <Header />
            <WorkoutsPreviewPage />
        </>
    );
}

export default App;

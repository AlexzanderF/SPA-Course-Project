import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import WorkoutsPreviewPage from './components/workouts/PreviewPage/WorkoutsPreviewPage';
import ProfilePage from './components/Profile/ProfilePage';
const isAuthenticated = true;

function App() {
    return (
        <>
            <Header />
            <Router>
                <div className="container mx-auto mt-20">
                    <Route exact path="/"
                        render={() => (isAuthenticated ?   // remove the "!" later
                            <WorkoutsPreviewPage /> :
                            <h1>Not Authenticated</h1>)}
                    />
                    <Route exact path="/profile/:username" component={ProfilePage} />
                    {/* <Route exact path="/workouts/:id" component={ } /> */}
                </div>
            </Router>
        </>
    );
}

export default App;

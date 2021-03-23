import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import WorkoutsPreviewPage from './components/Workouts/PreviewPage/WorkoutsPreviewPage';
import ProfilePage from './components/Profile/ProfilePage';
import LoginPage from './components/Auth/Login';
const isAuthenticated = true;

function App() {
    return (
        <>
            <Header />
            <div className="container mx-auto mt-20">
                <Switch>
                    <Route exact path="/"
                        render={(props) => (isAuthenticated ?
                            <WorkoutsPreviewPage {...props} /> :
                            <h1>Not Authenticated</h1>)}
                    />
                    <Route exact path="/profile/:username" component={ProfilePage} />
                    {/* <Route exact path="/workouts/:id" component={ } /> */}
                    <Route exact path="/login" component={LoginPage} />
                    <Route path="*" component={() => <h1>404 NOT FOUND</h1>} />
                </Switch>
            </div>
        </>
    );
}

export default App;

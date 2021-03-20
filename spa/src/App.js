import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import WorkoutsPreviewPage from './components/workouts/PreviewPage/WorkoutsPreviewPage';
import ProfilePage from './components/Profile/ProfilePage';
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
                    <Route path="*" component={() => <h1>404 NOT FOUND</h1>} />
                </Switch>
            </div>
        </>
    );
}

export default App;

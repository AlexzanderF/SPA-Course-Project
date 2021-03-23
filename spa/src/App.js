import { Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import UserContext from './user-context';

import ProtectedRoute from './protected-route';
import Header from './components/Header/Header';
import WorkoutsPreviewPage from './components/Workouts/PreviewPage/WorkoutsPreviewPage';
import ProfilePage from './components/Profile/ProfilePage';
import LoginPage from './components/Auth/LoginPage';
import RegisterPage from './components/Auth/RegisterPage';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage['token'] ? true : false);

    return (
        <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
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
                    <ProtectedRoute exact
                        path="/login"
                        isAuthenticated={!isAuthenticated}
                        component={LoginPage}
                    />
                    <ProtectedRoute exact
                        path="/register"
                        isAuthenticated={!isAuthenticated}
                        component={RegisterPage}
                    />
                    <Route path="*" component={() => <h1>404 NOT FOUND</h1>} />
                </Switch>
            </div>
        </UserContext.Provider>
    );
}

export default App;

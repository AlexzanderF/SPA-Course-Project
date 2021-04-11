import { Route, Switch, useHistory } from 'react-router-dom';
import { useState } from 'react';
import UserContext from './contexts/user-context';
import { isJWTExpired } from './services/authService';

import ProtectedRoute from './protected-route';
import GuestPage from './components/GuestPage';
import Header from './components/Header/Header';
import LoginPage from './components/Auth/LoginPage';
import RegisterPage from './components/Auth/RegisterPage';
import ProfilePage from './components/Profile/ProfilePage';
import WorkoutsPreviewPage from './components/Workouts/PreviewPage/WorkoutsPreviewPage';
import WorkoutPage from './components/Workouts/SingleWorkout/WorkoutPage';
import AllWorkoutsPage from './components/Workouts/AllWorkoutsPage/AllWorkoutsPage';
import AboutPage from './components/About/AboutPage';

function App() {
    const history = useHistory();
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage['token'] ? true : false);

    if (isAuthenticated && isJWTExpired()) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('expiresIn');
        setIsAuthenticated(false);
        history.push('/');
    }

    return (
        <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            <Header />
            <Switch>
                <Route exact path="/"
                    render={(props) => (isAuthenticated ?
                        <WorkoutsPreviewPage {...props} /> :
                        <GuestPage {...props} />)}
                />
                <Route exact path="/profile/:username" component={ProfilePage} />
                <ProtectedRoute exact
                    path="/workouts/:id"
                    isAuthenticated={isAuthenticated}
                    component={WorkoutPage}
                />
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
                <ProtectedRoute exact
                    path="/workouts"
                    isAuthenticated={isAuthenticated}
                    component={AllWorkoutsPage}
                />
                <Route exact
                    path="/about"
                    component={AboutPage}
                />
                <Route path="*" exact
                    component={() => (
                        <h1 className="mx-auto w-1/4 font-bold text-3xl">404 NOT FOUND</h1>
                    )} />
            </Switch>
        </UserContext.Provider>
    );
}

export default App;

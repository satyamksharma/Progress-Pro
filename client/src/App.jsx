import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PageNotFound from './pages/PageNotFound';
import ForgotPassword from './pages/Users/ForgotPassword';
import Workout from './pages/Users/Workout';
import Exercises from './pages/Users/Exercises';
import Settings from './pages/Users/Settings';
import Profile from './pages/Users/Profile';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/login'
                    element={<Login />}
                />
                <Route
                    path='/signup'
                    element={<SignUp />}
                />
                <Route
                    path='/forgot-password'
                    element={<ForgotPassword />}
                />
                <Route
                    path='/:uId/'
                    element={<Workout />}
                />
                <Route
                    path='/:uId/exercises'
                    element={<Exercises />}
                />
                <Route
                    path='/:uId/settings'
                    element={<Settings />}
                />
                <Route
                    path='/:uId/profile'
                    element={<Profile />}
                />
                <Route
                    path='*'
                    element={<PageNotFound />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

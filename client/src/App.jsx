import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PageNotFound from './pages/PageNotFound';

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
                    path='*'
                    element={<PageNotFound />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

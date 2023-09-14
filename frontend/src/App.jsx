import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Users/Profile";
import Exercises from "./pages/Users/Exercises";
import Progress from "./pages/Users/Workout";
import Authentication from "./pages/Authentication";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/profile'
                    element={<Profile />}
                />
                <Route
                    path='/exercises'
                    element={<Exercises />}
                />
                <Route
                    path='/progress'
                    element={<Progress />}
                />
                <Route
                    path='/authentication'
                    element={<Authentication />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

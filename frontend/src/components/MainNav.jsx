import { NavLink } from "react-router-dom";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import About from "../pages/About";
import SignUp from "../pages/SignUp";
function MainNav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to={<Home />}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={<About />}>About</NavLink>
                </li>
                <li>
                    <NavLink to={<Pricing />}>Pricing</NavLink>
                </li>
                <li>
                    <NavLink to={<SignUp />}>SignUp</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default MainNav;

import { NavLink } from "react-router-dom";

function MainNav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/pricing'>Pricing</NavLink>
                </li>
                <li>
                    <NavLink to='/login'>Login/SignUp</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default MainNav;

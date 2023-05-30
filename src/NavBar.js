import { NavLink } from "react-router-dom";
import './NavBar.css'


const NavBar = () => {

    return (
        <>
        <nav className='Navbar'>
            <NavLink to='/'>Go Back!</NavLink>
            <NavLink to='/soda'>Soda</NavLink>
            <NavLink to='/chips'>Chips</NavLink>
            <NavLink to='/candybar'>Candy Bar</NavLink>
        </nav>
        </>
    )
}

export default NavBar;
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to="/portfolio/" activeClassName={classes.active}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about/" activeClassName={classes.active}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact/" activeClassName={classes.active}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
};
export default MainNavigation;
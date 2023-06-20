import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink 
      className={css.link}
      activeClassName={css.activeLink} 
      to="/register">
        Register
      </NavLink>
      <NavLink 
      className={css.link} 
      activeClassName={css.activeLink}
      to="/login">
        Log In
      </NavLink>
    </div>
  );
};

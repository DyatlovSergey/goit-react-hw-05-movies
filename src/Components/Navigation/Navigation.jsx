
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const activeLink = ({ isActive }) =>
    isActive ? `${s.link} ${s.activeLink}` : s.link;

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <NavLink to="/" end className={activeLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={activeLink}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
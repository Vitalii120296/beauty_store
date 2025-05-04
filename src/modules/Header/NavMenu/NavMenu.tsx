import { NavLink } from 'react-router-dom';
import s from './NavMenu.module.scss';

export const NavMenu = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav__list}>
        <li className={s.nav__item}>
          <NavLink to="/" className={s.nav__link}>
            Home
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="services" className={s.nav__link}>
            Services
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="contact" className={s.nav__link}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
  ;
}
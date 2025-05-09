import { NavLink } from 'react-router-dom';
import s from './NavMenu.module.scss';
import { useTranslation } from 'react-i18next';

export const NavMenu = () => {
  const { t } = useTranslation('NavMenu');

  return (
    <nav className={s.nav}>
      <ul className={s.nav__list}>
        <li className={s.nav__item}>
          <NavLink to="/" className={s.nav__link}>
            {t('Home')}
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="services" className={s.nav__link}>
            {t('Services')}
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="contact" className={s.nav__link}>
            {t('Contact')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
  ;
}
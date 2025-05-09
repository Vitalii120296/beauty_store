import classNames from 'classnames';
import s from './Header.module.scss';
import { NavMenu } from './NavMenu';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MenuIcon from '@mui/icons-material/Menu';
import { BurgerMenu } from './BurgerMenu';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';


export const Header = () => {
  const { i18n } = useTranslation();
  const [activeBurger, setActiveBurger] = useState(false);
  const toggleBurgerMenu = () => setActiveBurger(prev => !prev);

  return (
    <div className={classNames(s.header__wrapper, "container")}>
      <div className={s.header} id="top">
        <div className={s.header__logo_wrapper}>
          <Link to={'/'} className={s.header__logo}>
            <img src="./img/logo.png" alt="logo" loading='lazy' />
          </Link>
          <div className={s.header__number}>
            <a href="tel:+(205) 324-1123">(205) 324-1123</a>
          </div>
        </div>
        <div className={s.nav__wrapper}>
          <div className={s.nav__burger} onClick={toggleBurgerMenu}>
            {activeBurger ? <CloseIcon color={"inherit"} /> : <MenuIcon color={"inherit"} />}
          </div>
          <NavMenu />
          <div className={classNames(s.nav__burger_menu, {
            [s.active]: activeBurger,
          })}>
            <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} />
          </div>
        </div>
        <div className={s.header__language}>
          <span
            className={classNames({
              [s.active]: i18n.language === 'en',
            })}
            onClick={() => i18n.changeLanguage('en')}
          >
            Eng
          </span>
          |
          <span
            className={classNames({
              [s.active]: i18n.language === 'ru',
            })}
            onClick={() => i18n.changeLanguage('ru')}
          >
            Рус
          </span>
        </div>
      </div>
    </div>
  );
};
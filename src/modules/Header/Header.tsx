import classNames from 'classnames';
import s from './Header.module.scss';
import { NavMenu } from './NavMenu';

export const Header = () => {
  return (
    <div className={classNames(s.header__wrapper, "container")}>
      <div className={s.header} id="top">
        <div className={s.header__logo}>
          <img src="./img/logo1.png" alt="" />
        </div>
        <div className={s.nav__wrapper}>
          <NavMenu />
        </div>
      </div>
    </div>
  );
};
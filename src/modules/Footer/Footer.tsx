import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import s from './Footer.module.scss';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation('Footer');

  return (
    <footer className={s.footer}>
      <div className={classNames(s.footer__wrapper, "container")}>
        <div className={s.footer__logo}>
          <img src="./img/logoWhite.png" alt="" />
        </div>
        <div className={s.footer__contact}>
          <h3>{t('contactTitle')}</h3>
          <p>{t('phone')}</p>
          <p>{t('email')}</p>
          <p>{t('address')}</p>
        </div>

        <div className={s.footer__hours}>
          <h3>{t('hoursTitle')}</h3>
          <p>{t('monFri')}</p>
          <p>{t('sat')}</p>
          <p>{t('sun')}</p>
        </div>

        <div className={s.footer__navigation}>
          <h3>{t('navigationTitle')}</h3>
          <ul>
            <li><Link to="/">{t('home')}</Link></li>
            <li><Link to="/services">{t('services')}</Link></li>
            <li><Link to="/contact">{t('contact')}</Link></li>
          </ul>
        </div>

        <div className={s.footer__social}>
          <h3>{t('followUs')}</h3>
          <div className={s.footer__social_icons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

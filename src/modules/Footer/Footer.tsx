import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
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
        <div className={s.footer__navigation}>
          <h3>{t('navigationTitle')}</h3>
          <ul>
            <li><Link to="/">{t('home')}</Link></li>
            <li><Link to="/services">{t('services')}</Link></li>
            <li><Link to="/contact">{t('contact')}</Link></li>
            <li><Link to="/about-us">{t('about')}</Link></li>
          </ul>
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
          <p>{t('APPOINTMENT ONLY')}</p>
        </div>

        <div className={s.footer__social}>
          <h3>{t('followUs')}</h3>
          <div className={s.footer__social_icons}>
            <a
              href="https://www.facebook.com/profile.php?id=61554590098725&rdid=wjH16cLHq5z6AN4B&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F198ggEffAh%2F#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/elegantbeautystudi?utm_source=qr&igsh=MTM4OWNrNG91cnozZA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@elegantbeautystudio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.tiktok.com/@elegant.beauty.studio?_t=ZT-8vTRLu7tkOk&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

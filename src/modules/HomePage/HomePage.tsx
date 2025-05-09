import classNames from 'classnames';
import s from './HomePage.module.scss';
import { Contact } from '../Contact';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export const HomePage = () => {
  const { t } = useTranslation('HomePage');
  const [serteficate, setSerteficate] = useState('');

  const closeCertificate = () => setSerteficate('');

  return (
    <div className={classNames(s.home, "container")}>
      <section className={s.home__title}>
        <div className={s.home__title_wrapper}>
          <h1>{t("home.title")}</h1>
          <p>
            <em>{t("home.description.emphasis")}<br /></em>
            {t("home.description.text")}
          </p>
          <button className={s.home__title_button}>
            <Link to="/services" className={s.home__title_link}>
              {t("home.button")}
            </Link>
          </button>
        </div>
      </section>

      <section className={s.home__expertise}>
        <h2 className={s.home__expertise_title}>{t("expertise.title")}</h2>
        <div className={s.home__expertise_cards}>
          {["branding", "communication", "strategy"].map((key, i) => (
            <div className={s.home__expertise_card} key={key}>
              <div className={s.home__expertise_card_img}>
                <img src={`./img/${i + 1}.jpg`} alt={t(`expertise.${key}.title`)} loading="lazy" />
              </div>
              <h3>{t(`expertise.${key}.title`)}</h3>
              <div className={s.home__expertise_card_information}>
                <p>{t(`expertise.${key}.text`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={s.home__benefits}>
        <h2 className={s.home__benefits_title}>{t("benefits.title")}</h2>
        <div className={s.home__benefits_list}>
          {["team", "products", "atmosphere"].map((key, i) => (
            <div className={s.home__benefits_benefit} key={key}>
              <div className={s.home__benefits_benefit_img}>
                <img src={`./img/${i + 4}.jpg`} alt={t(`benefits.${key}.title`)} loading="lazy" />
              </div>
              <h3>{t(`benefits.${key}.title`)}</h3>
              <p>{t(`benefits.${key}.text`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={s.home__about}>
        <h2 className={s.home__about_title}>{t("about.title")}</h2>
        <p className={s.home__about_information}>
          <em>{t("about.text")}</em>
        </p>
      </section>

      <section className={s.home__popular}>
        <h2 className={s.home__popular_title}>{t("popular.title")}</h2>
        <div className={s.home__popular_list}>
          {["hair", "nails", "face"].map((key, i) => (
            <div className={s.home__popular_card} key={key}>
              <div className={s.home__popular_card_img}>
                <img src={`./img/${i + 7}.jpg`} alt={t(`popular.${key}.title`)} loading="lazy" />
              </div>
              <h3>{t(`popular.${key}.title`)}</h3>
              <p>{t(`popular.${key}.text`)}</p>
              <span className={s.home__popular_price}>{t(`popular.${key}.price`)}</span>
            </div>
          ))}
        </div>
        <button className={s.home__popular_more}>
          <Link to="/services">
            {t("popular.more")}
            <img src="./img/right-arrow.svg" alt="arrow" className={s.home__popular_more_img} />
          </Link>
        </button>
      </section>

      <section className={s.home__certificates}>
        <h2 className={s.home__certificates_title}>{t("certificates.title")}</h2>
        <p className={s.home__certificates_subtitle}>{t("certificates.subtitle")}</p>
        <div className={s.home__certificates_gallery}>
          {[11, 12, 13, 10].map((name, i) => (
            <div
              className={s.home__certificates_img}
              key={i}
              onClick={() => setSerteficate(`./img/${name}.jpg`)}
            >
              <img src={`./img/${name}.jpg`} alt={`Certificate ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
        {serteficate && (
          <div className={s.home__certificates_active}>
            <button onClick={closeCertificate}>Close</button>
            <img src={serteficate} alt='Certificate' loading="lazy" />
          </div>
        )}
      </section>

      <Contact />
    </div>
  );
};

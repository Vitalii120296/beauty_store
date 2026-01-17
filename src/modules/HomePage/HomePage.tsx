import classNames from 'classnames';
import s from './HomePage.module.scss';
import { Contact } from '../Contact';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const HomePage = () => {
  const { t } = useTranslation('HomePage');
  const [serteficate, setSerteficate] = useState('');

  const closeCertificate = () => setSerteficate('');

  const popular = {
    "nails": "tining.jpg",
    "deep": "europeanDeepPoreCleansing.jpg",
    "face": "lamination.jpg"
  };

  const branding = {
    "branding": "home/branding.jpg",
    "communication": "home/communication.jpg",
    "strategy": "home/strategy.jpg",
  }

  const benefits = {
    "team": "home/team.jpg",
    "products": "home/products.jpg",
    "atmosphere": "home/atmosphere.jpg",
  }

  const pVariants = {
    hidden: {
      y: -25,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    }
  }

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
          {Object.entries(branding).map(([key, value], i) => (
            <motion.div
              className={s.home__expertise_card}
              key={i}
              initial={'hidden'}
              whileInView={'visible'}
              viewport={{ once: true, amount: 0.2 }}
              variants={pVariants}
              transition={{
                delay: 0.3 * i,
                ease: 'easeInOut',
                opacity: { duration: 0.8 },
                y: { duration: 0.3 }
              }}
            >
              <div className={s.home__expertise_card_img}>
                <img src={`./img/${value}?v=${Date.now()}`} alt={t(`expertise.${key}.title`)} loading="lazy" />
              </div>
              <h3>{t(`expertise.${key}.title`)}</h3>
              <div className={s.home__expertise_card_information}>
                <p>{t(`expertise.${key}.text`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={s.home__benefits}>
        <h2 className={s.home__benefits_title}>{t("benefits.title")}</h2>
        <div className={s.home__benefits_list}>
          {Object.entries(benefits).map(([key, value], i) => (
            <motion.div
              className={s.home__benefits_benefit}
              key={i}
              initial={'hidden'}
              whileInView={'visible'}
              viewport={{ once: true, amount: 0.2 }}
              variants={pVariants}
              transition={{
                delay: 0.3 * i,
                ease: 'easeInOut',
                opacity: { duration: 0.8 },
                y: { duration: 0.3 }
              }}
            >
              <div className={s.home__benefits_benefit_img}>
                <img src={`./img/${value}?v=${Date.now()}`} alt={t(`benefits.${key}.title`)} loading="lazy" />
              </div>
              <h3>{t(`benefits.${key}.title`)}</h3>
              <p>{t(`benefits.${key}.text`)}</p>
            </motion.div>
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
          {Object.entries(popular).map(([key, value], i) => (
            <motion.div
              className={s.home__popular_card}
              key={i}
              initial={'hidden'}
              whileInView={'visible'}
              viewport={{ once: true, amount: 0.2 }}
              variants={pVariants}
              transition={{
                delay: 0.3 * i,
                ease: 'easeInOut',
                opacity: { duration: 0.8 },
                y: { duration: 0.3 }
              }}
            >
              <div className={s.home__popular_card_img}>
                <img src={`./img/services/${value}?v=${Date.now()}`} alt={t(`popular.${key}.title`)} loading="lazy" />
              </div>
              <h3>{t(`popular.${key}.title`)}</h3>
              <p>{t(`popular.${key}.text`)}</p>
              <span className={s.home__popular_price}>{t(`popular.${key}.price`)}</span>
            </motion.div>
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
          {["sertificate",
            "sertificate1",
            "sertificate2",
            "sertificate3",
            "sertificate5"].map((name, i) => (
              <div
                className={s.home__certificates_img}
                key={i}
                onClick={() => setSerteficate(`./img/${name}.jpg`)}
              >
                <img src={`./img/${name}.jpg?v=${Date.now()}`} alt={`Certificate ${i + 1}`} loading="lazy" />
              </div>
            ))}
        </div>
        {serteficate && (
          <div className={s.home__certificates_active}>
            <div className={s.home__certificates_wrapper}>
              <img src={serteficate} alt='Certificate' loading="lazy" />
              <button onClick={closeCertificate}>Close</button>
            </div>
          </div>
        )}
      </section>

      <Contact />
    </div>
  );
};

import s from './ServiceCard.module.scss';
import { ServiceType } from '../../../../types/ServiceType';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type Props = {
  services: ServiceType[];
}

export const ServiceCard: React.FC<Props> = ({ services }) => {
  const { t, i18n } = useTranslation('ServiceCard');
  const lang = i18n.language as 'en' | 'ru';;
  return (
    <>
      {services.map((card, index) => (
        <div className={s.card} key={index}>
          <div className={s.card__img}>
            <img src={card.img} alt={card.title[lang]} loading="lazy" />
          </div>
          <div className={s.card__title}>
            <h3>{card.title[lang]}</h3>
          </div>
          <div className={s.card__price}>
            <p>{card.price[lang]}</p>
          </div>
          <div className={s.card__description}>
            <p>{card.description[lang]}</p>
          </div>
          {card.skinType && (
            <div className={s.card__skinType}>
              <p>{card.skinType[lang]}</p>
            </div>
          )}
          {card.additionally && (
            <div className={s.card__additionally}>
              <p>{card.additionally[lang]}</p>
            </div>
          )}
          <div className={s.card__book_now}>
            <button className={s.card__button}>
              <Link to={`/contact/${card.url}`}>{t('Book now')}</Link>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
import s from './ServiceCard.module.scss';
import { Service } from '../../../../types/ServiceType';
import React from 'react';

type Props = {
  services: Service[];
}

export const ServiceCard: React.FC<Props> = ({ services }) => {
  return (
    <>
      {services.map((card, index) => (
        <div className={s.card} key={index}>
          <div className={s.card__img}>
            <img src={card.img} alt={card.name} />
          </div>
          <div className={s.card__name}>
            <h3>{card.name}</h3>
          </div>
          <div className={s.card__price}>
            <p>{card.price}</p>
          </div>
          <div className={s.card__benefits}>
            <p>{card.benefits}</p>
          </div>
        </div>
      ))}
    </>
  );
};
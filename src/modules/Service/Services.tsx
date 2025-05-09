import { ServiceCard } from './components/ServiceCard';
import s from './Service.module.scss';
import classNames from 'classnames';
import { useServices } from '../../hooks/useServices';
import { useTranslation } from 'react-i18next';

export const Services = () => {
  const { services } = useServices();
  const { t } = useTranslation('Services');

  const waxingCategories = [
    {
      title: t('waxing.women.title'),
      services: [
        ['waxing.women.fullFace', '$44.99'],
        ['waxing.women.brows', '$19.99'],
        ['waxing.women.chinLip', '$16.99'],
        ['waxing.women.nostrils', '$12.99'],
        ['waxing.women.ears', '$12.99'],
        ['waxing.women.fullArms', '$49.99'],
        ['waxing.women.halfArms', '$19.99'],
        ['waxing.women.armpits', '$14.99'],
        ['waxing.women.fullStomach', '$35.99'],
        ['waxing.women.bikiniClassic', '$49.99'],
        ['waxing.women.brazilian', '$79.99'],
        ['waxing.women.fullLegs', '$79.99'],
        ['waxing.women.upperLegs', '$39.99'],
        ['waxing.women.lowerLegs', '$49.99'],
      ],
    },
    {
      title: t('waxing.men.title'),
      services: [
        ['waxing.men.armpits', '$19.99'],
        ['waxing.men.fullArms', '$49.99'],
        ['waxing.men.halfArms', '$35.99'],
        ['waxing.men.fullLegs', '$88.99'],
        ['waxing.men.stomachLine', '$19.99'],
        ['waxing.men.fullStomach', '$39.99'],
        ['waxing.men.chest', '$39.99'],
        ['waxing.men.chestStomach', '$69.99'],
        ['waxing.men.back', '$69.99'],
        ['waxing.men.lowerBack', '$39.99'],
        ['waxing.men.upperBack', '$39.99'],
      ],
    },
    {
      title: t('waxing.menFacial.title'),
      services: [
        ['waxing.menFacial.fullCombo', '$49.99'],
        ['waxing.menFacial.beardContouring', '$29.99'],
        ['waxing.menFacial.browContouring', '$19.99'],
        ['waxing.menFacial.cheeks', '$15.99'],
        ['waxing.menFacial.ears', '$15.99'],
        ['waxing.menFacial.nostrils', '$15.99'],
      ],
    },
  ];

  return (
    <section className={classNames(s.serviceSection, 'container')}>
      <div className={s.serviceGrid}>
        <ServiceCard services={services} />
      </div>

      <div className={s.waxing}>
        <div className={s.waxing__wrapper}>
          {waxingCategories.map((category, idx) => (
            <div className={s.waxing__card} key={idx}>
              <h2 className={s.waxing__title}>{category.title}</h2>
              <ul className={s.waxing__list}>
                {category.services.map(([key, price]) => (
                  <li key={key}>
                    {t(key)} <span>{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className={s.waxing__benefits}>
          <p className={s.waxing__note}>{t('waxing.note')}</p>
          <h3 className={s.waxing__subtitle}>{t('waxing.benefitsTitle')}</h3>
          <p className={s.waxing__benefits}>{t('waxing.benefitsText')}</p>
        </div>
      </div>
    </section>
  );
};

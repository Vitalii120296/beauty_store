import { useTranslation } from 'react-i18next';
import s from './About.module.scss';

export const About = () => {
  const { t } = useTranslation('About');

  return (
    <div className={"container"}>
      <div className={s.about}>
        <h1>{t('title')}</h1>
        <div className={s.about__content}>
          <p>
            <img src="./img/9.jpg" alt="image" loading="lazy" />
            {t('text')}
          </p>
        </div>
      </div>
    </div>
  )
}
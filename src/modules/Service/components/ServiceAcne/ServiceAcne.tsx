import classNames from 'classnames';
import s from './ServiceAcne.module.scss';
import { ServiceCard } from '../ServiceCard';
import { useServices } from '../../../../hooks/useServices';


export const ServiceAcne = () => {
  const { acne } = useServices();

  return (
    <section className={classNames(s.serviceSection, 'container')}>
      <div className={s.serviceGrid}>
        <ServiceCard services={acne} />
      </div>
    </section>
  )
}

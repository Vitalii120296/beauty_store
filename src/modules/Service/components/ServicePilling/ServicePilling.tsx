import classNames from 'classnames';
import s from './ServicePilling.module.scss';
import { ServiceCard } from '../ServiceCard';
import { useServices } from '../../../../hooks/useServices';


export const ServicePilling = () => {
const { pillings } = useServices();

  return (
    <section className={classNames(s.serviceSection, 'container')}>
      <div className={s.serviceGrid}>
        <ServiceCard services={pillings} />
      </div>
    </section>
  )
}

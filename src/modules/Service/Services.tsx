import { useEffect, useState } from 'react';
import { ServiceCard } from './components/ServiceCard';
import s from './Service.module.scss';
import { Service } from '../../types/ServiceType';
import classNames from 'classnames';

export const Services = () => {
  const [services, setServices] = useState<Service[]>([])
  const API_URL_SERVICES = './api/services.json';

  useEffect(() => {
    fetch(API_URL_SERVICES)
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      throw new Error('Failed to fecth services');
    })
    .then((data: Service[]) => {
      setServices(data);
    })
    .catch(error => {
      throw error;
    })
  }, [])

  return (
    <section className={classNames(s.service, "container")}>
      <ServiceCard services={services} />
    </section>
  );
};
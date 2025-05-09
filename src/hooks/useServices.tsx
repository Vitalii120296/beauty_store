import { useEffect, useState } from 'react';
import { ServiceType } from '../types/ServiceType';

export const useServices = () => {
  const [services, setServices] = useState<ServiceType[]>([]);
  const API_URL_SERVICES = '/api/services.json';

  useEffect(() => {
    fetch(API_URL_SERVICES)
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('Failed to fetch services');
      })
      .then((data: ServiceType[]) => setServices(data))
      .catch(error => {
        console.error(error);
      });
  }, []);
  return { services };
}

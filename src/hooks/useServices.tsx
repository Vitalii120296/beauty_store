import { useEffect, useState } from 'react';
import { ServiceType } from '../types/ServiceType';

export const useServices = () => {
  const API_URLS = {
    services: '/api/services.json',
    acne: '/api/servicesAcne.json',
    pillings: '/api/servicesPilling.json',
  };

  const [services, setServices] = useState<ServiceType[]>([]);
  const [acne, setAcne] = useState<ServiceType[]>([]);
  const [pillings, setPillings] = useState<ServiceType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (url: string): Promise<ServiceType[]> => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${url}`);
    }
    return response.json();
  };

  useEffect(() => {
    const loadAllServices = async () => {
      try {
        setLoading(true);
        const [servicesData, pillingsData, acneData] = await Promise.all([
          fetchData(API_URLS.services),
          fetchData(API_URLS.pillings),
          fetchData(API_URLS.acne),
        ]);
        setServices(servicesData);
        setPillings(pillingsData);
        setAcne(acneData);
      } catch (err) {
        console.error(err);
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    loadAllServices();
  }, []);

  return { services, pillings, acne, loading, error };
};

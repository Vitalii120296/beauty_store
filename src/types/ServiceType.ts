export interface ServiceType {
  url: string;
  img: string;
  title: {
    en: string;
    ru: string;
  };
  price: {
    en: string;
    ru: string;
  };
  description: {
    en: string;
    ru: string;
  };
  skinType: {
    en: string;
    ru: string;
  };
  additionally?: {
    en: string;
    ru: string;
  };
}

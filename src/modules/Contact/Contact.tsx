import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import s from './Contact.module.scss';
import classNames from 'classnames';
import { FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTiktok, FaFacebook, FaYoutube } from 'react-icons/fa';
import { useServices } from '../../hooks/useServices';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { PayPalButtons } from "@paypal/react-paypal-js";


export const Contact = () => {
  const { t } = useTranslation('Contact')
  const formRef = useRef<HTMLFormElement | null>(null);
  const [success, setSuccess] = useState(false);
  const { services } = useServices();
  const { i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ru';
  const { serviceId } = useParams();
  const [dropValue, setDropValue] = useState(serviceId || '');


  useEffect(() => {
    if (serviceId) {
      setDropValue(serviceId);
    }
  }, [serviceId]);


  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_xyz123',     // 🔁 Замінити на свій ID
        'template_abc456',    // 🔁 Замінити на свій шаблон
        formRef.current,
        'xJ4kDq93sdWxx'       // 🔁 Замінити на свій публічний ключ
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current?.reset();
          setTimeout(() => setSuccess(false), 4000);
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <section className={s.contact} id="contact">
      <h2 className={s.contact__title}>{t('title')}</h2>
      <p className={s.contact__subtitle}>
        {t('subtitle')}
      </p>
      <div className={classNames(s.contact__wrapper, "container")}>
        <form
          className={s.contact__form}
          ref={formRef}
          onSubmit={sendEmail}
        >
          <select
            name="category"
            required
            value={dropValue || ""}
            onChange={(e) => setDropValue(e.target.value)}
          >
            <option value="" disabled>
              {t('selectService')}
            </option>
            {services.map(service => (
              <option key={service.url} value={service.url}>
                {service.title[lang]}
              </option>
            ))}
          </select>
          <input type="text" name="user_name" placeholder={`${t('namePlaceholder')}`} required />
          <input type="number" name="user_number" placeholder={`${t('numberPlaceholder')}`} required />
          <input type="email" name="user_email" placeholder={`${t('emailPlaceholder')}`} required />
          <textarea rows={5} name="message" placeholder={`${t('messagePlaceholder')}`} required></textarea>
          <button type="submit">{t('sendButton')}</button>
          {success && (
            <p className={s.success_message}>{t('successMessage')}</p>
          )}
        </form>

        <div className={s.contact__data}>
          <div className={s.paypal_wrapper}>
            <PayPalButtons
              style={{ layout: 'vertical' }}
              createOrder={(_, actions) => {
                return actions.order.create({
                  intent: 'CAPTURE',
                  purchase_units: [
                    {
                      amount: {
                        value: "19.99",
                        currency_code: 'USD',
                      },
                    },
                  ],
                });
              }}
              onApprove={(_, actions) => {
                if (!actions.order) return Promise.resolve(); // для типобезпеки

                return actions.order.capture().then((details) => {
                  const name =
                    details.payment_source?.paypal?.name?.given_name ||
                    details.payer?.name?.given_name;

                  if (name) {
                    alert(`Transaction completed by ${name}`);
                  } else {
                    alert('Transaction completed');
                  }
                });
              }}
            />
          </div>
          <div className={s.contact__info}>
            <div><FaMapMarkerAlt /> <span>4924 109th St SW, Lakewood, WA 98499</span></div>
            <div><FaPhoneAlt /> <a href="tel:253-844-5804">253-844-5804</a></div>
            <div><FaEnvelope /> <a href="mailto:testgmail.com">test@gmail.com</a></div>
            <div className={s.contact__socials}>
              <a
                href="https://www.facebook.com/profile.php?id=61554590098725&rdid=wjH16cLHq5z6AN4B&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F198ggEffAh%2F#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/elegantbrowss?utm_source=qr&igsh=MTM4OWNrNG91cnozZA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.tiktok.com/@elegant.beauty.studio?_t=ZT-8vTRLu7tkOk&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </a></div>
          </div>
        </div>

      </div>

    </section>
  );
};

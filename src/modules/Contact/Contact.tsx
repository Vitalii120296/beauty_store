import s from './Contact.module.scss';

export const Contact = () => {
  return (
    <section className={s.home__contact} id="contact">
      <h2 className={s.home__contact_title}>Get in Touch</h2>
      <p className={s.home__contact_subtitle}>Have questions or want to book a session? Send us a message!</p>
      <form className={s.home__contact_form}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows={5} placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};
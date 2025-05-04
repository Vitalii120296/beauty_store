import classNames from 'classnames';
import s from './HomePage.module.scss';
import { Contact } from '../Contact';

export const HomePage = () => {
  return (
    <div className={classNames(s.home, "container")}>
      <section className={s.home__title}>
        <div className={s.home__title_wrapper}>
          <h1>ELEGANT BEAUTY STUDIO</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br /> Et architecto earum alias voluptates repudiandae provident, consequuntur quos inventore dolor ipsa </p>
          <button className={s.home__title_button}>
            <a href="#s" className={s.home__title_link}>
              Book now
            </a>
          </button>
        </div>
        {/* <div className={s.home__title_img}>
          <img src="./img/title-img.png" alt="our salon" loading="lazy" />
        </div> */}
      </section>

      <section className={s.home__expertise}>
        <h2 className={s.home__expertise_title}>Our expertise</h2>
        <div className={s.home__expertise_cards}>
          <div className={s.home__expertise_card}>
            <div className={s.home__expertise_card_img}>
              <img src="./img/images.png" alt="images" loading='lazy' />
            </div>
            <h3>Branding
            </h3>
            <div className={s.home__expertise_card_information}>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quam laboriosam modi quaerat qui assumenda necessitatibus commodi laborum reprehenderit, cum, mollitia temporibus quia minima error facere eum dolor sit perferendis.</p>
            </div>
          </div>
          <div className={s.home__expertise_card}>
            <div className={s.home__expertise_card_img}>
              <img src="./img/images.png" alt="images" loading='lazy' />
            </div>
            <h3>Communication</h3>
            <div className={s.home__expertise_card_information}>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quam laboriosam modi quaerat qui assumenda necessitatibus commodi laborum reprehenderit, cum, mollitia temporibus quia minima error facere eum dolor sit perferendis.</p>
            </div>
          </div>
          <div className={s.home__expertise_card}>
            <div className={s.home__expertise_card_img}>
              <img src="./img/images.png" alt="images" loading='lazy' />
            </div>
            <h3>Strategy</h3>
            <div className={s.home__expertise_card_information}>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quam laboriosam modi quaerat qui assumenda necessitatibus commodi laborum reprehenderit, cum, mollitia temporibus quia minima error facere eum dolor sit perferendis.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={s.home__benefits}>
        <h2 className={s.home__benefits_title}>Why Choose Us</h2>
        <div className={s.home__benefits_list}>
          <div className={s.home__benefits_benefit}>
            <img src="./img/images.png" alt="Professional Team" />
            <h3>Professional Team</h3>
            <p>Certified experts with years of experience ready to serve your beauty needs.</p>
          </div>
          <div className={s.home__benefits_benefit}>
            <img src="./img/images.png" alt="Premium Products" />
            <h3>Premium Products</h3>
            <p>We use only top-tier, skin-safe cosmetics and haircare solutions.</p>
          </div>
          <div className={s.home__benefits_benefit}>
            <img src="./img/images.png" alt="Relaxing Atmosphere" />
            <h3>Relaxing Atmosphere</h3>
            <p>Enjoy a calm, beautiful space where you can unwind and feel truly pampered.</p>
          </div>
        </div>
      </section>

      <section className={s.home__about}>
        <h2 className={s.home__about_title}>Who we are</h2>
        <p className={s.home__about_information}>
          We embrace a strategic approach to creative ideas. We are interested in people and human relationships. This is the main thing you need to know about us. We believe in the power of bold ideas that can solve business challenges.
        </p>
      </section>

      <section className={s.home__popular}>
        <h2 className={s.home__popular_title}>Top Services</h2>
        <div className={s.home__popular_list}>
          <div className={s.home__popular_card}>
            <img src="./img/images.png" alt="Hair Styling" />
            <h3>Hair Styling</h3>
            <p>Elegant haircuts, evening styling and care with premium products.</p>
            <span className={s.home__popular_price}>from $45</span>
          </div>
          <div className={s.home__popular_card}>
            <img src="./img/images.png" alt="Nail Design" />
            <h3>Nail Design</h3>
            <p>Trendy manicures and nail art using top-quality, skin-safe gel polishes.</p>
            <span className={s.home__popular_price}>from $35</span>
          </div>
          <div className={s.home__popular_card}>
            <img src="./img/images.png" alt="Facial Care" />
            <h3>Facial Care</h3>
            <p>Deep cleansing, hydration, and rejuvenation treatments for glowing skin.</p>
            <span className={s.home__popular_price}>from $50</span>
          </div>
        </div>
      </section>
      
      <section className={s.home__certificates}>
        <h2 className={s.home__certificates_title}>Our Certificates</h2>
        <p className={s.home__certificates_subtitle}>
          We are proud of our professionalism and qualifications.
        </p>
        <div className={s.home__certificates_gallery}>
          <img src="./img/images.png" alt="Certificate 1" loading="lazy" />
          <img src="./img/images.png" alt="Certificate 2" loading="lazy" />
          <img src="./img/images.png" alt="Certificate 3" loading="lazy" />
          <img src="./img/images.png" alt="Certificate 4" loading="lazy" />
        </div>
      </section>
      <Contact />

    </div>
  );
};
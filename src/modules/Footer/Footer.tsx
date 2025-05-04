import classNames from 'classnames';
import s from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={classNames(s.footer, "container")}>
      footer
    </div>
  );
};
import PropTypes from 'prop-types';
import css from '..//Notification/Notification.module.css';

export const Notification = ({ message }) => {
  return <div className={css.notification}>{message}</div>;
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;

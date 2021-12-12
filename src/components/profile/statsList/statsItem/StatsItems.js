import PropTypes from 'prop-types';
import styles from './StatsItems.module.css';

const StatsItem = ({ label, quantity = 0 }) => {
  return (
    <li className={styles.statsItem}>
      <span className={styles.label}>{label}</span>
      <span className={styles.quantity}>{quantity}</span>
    </li>
  );
};

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number,
};

export default StatsItem;

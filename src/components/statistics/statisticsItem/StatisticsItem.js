import PropTypes from 'prop-types';
import styles from './StatisticsItem.module.css';

const generateRandomRgbValue = (minValue, maxValue) =>
  minValue + Math.round((maxValue - minValue) * Math.random());

const generateRandomRgbColor = (callback, minValue, maxValue) =>
  `rgb(${callback(minValue, maxValue)}, ${callback(minValue, maxValue)}, ${callback(
    minValue,
    maxValue,
  )})`;

const StatItem = ({ label, percentage = 0 }) => {
  return (
    <li
      className={styles.item}
      style={{ backgroundColor: generateRandomRgbColor(generateRandomRgbValue, 150, 220) }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{Number(percentage)}%</span>
    </li>
  );
};

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatItem;

import PropTypes from 'prop-types';
import StatItem from '../statisticsItem';
import styles from './StatisticsList.module.css';

const StatList = ({ statistics }) => {
  return (
    <ul className={styles.statList}>
      {statistics.map(({ id, label, percentage }) => (
        <StatItem key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
};

StatList.propTypes = {
  statistics: PropTypes.arrayOf(PropTypes.object),
};

export default StatList;

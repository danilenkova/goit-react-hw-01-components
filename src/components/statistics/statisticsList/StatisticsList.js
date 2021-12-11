import PropTypes from 'prop-types';
import StatItem from '../statisticsItem/StatisticsItem';

const StatList = ({ statistics }) => {
  return (
    <ul>
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

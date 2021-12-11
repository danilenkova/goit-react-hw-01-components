import PropTypes from 'prop-types';
import StatsItem from '../statsItem/StatsItems';

const StatsList = ({ stats }) => {
  const StatsItems = Object.keys(stats);
  return (
    <ul>
      {StatsItems.map(item => (
        <StatsItem key={item} label={item} quantity={stats[item]} />
      ))}
    </ul>
  );
};

StatsList.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number),
};

export default StatsList;

import PropTypes from 'prop-types';
import StatList from './statisticsList/StatisticsList';

const Statistics = ({ title, statistics }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <StatList statistics={statistics} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(PropTypes.object),
};

export default Statistics;

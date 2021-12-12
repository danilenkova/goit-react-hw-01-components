import PropTypes from 'prop-types';
import StatList from './statisticsList';
import styles from './Statistics.module.css';

const Statistics = ({ title, statistics }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <StatList statistics={statistics} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(PropTypes.object),
};

export default Statistics;

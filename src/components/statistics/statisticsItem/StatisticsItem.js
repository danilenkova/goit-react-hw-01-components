import PropTypes from 'prop-types';

const StatItem = ({ label, percentage = 0 }) => {
  return (
    <li>
      <span>{label}</span>
      <span>{Number(percentage)}%</span>
    </li>
  );
};

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatItem;

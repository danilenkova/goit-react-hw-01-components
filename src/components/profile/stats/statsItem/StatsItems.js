import PropTypes from 'prop-types';

const StatsItem = ({ label, quantity = 0 }) => {
  return (
    <li>
      <span>{label}</span>
      <span>{quantity}</span>
    </li>
  );
};

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number,
};

export default StatsItem;

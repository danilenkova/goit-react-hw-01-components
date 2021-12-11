import PropTypes from 'prop-types';
import TransactionHeader from './transactionHeader/TransactionHeader';
import TransactionItem from './transactionItem/TransactionItem';

const TransactionHistory = ({ transactions }) => {
  const titles = Object.keys(transactions[0]).filter(item => item !== 'id');
  return (
    <table>
      <thead>
        <tr>
          {titles.map(title => (
            <TransactionHeader key={title} title={title} />
          ))}
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionItem key={id} type={type} amount={amount} currency={currency} />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionHistory;

import Profile from './components/profile';
import Statistics from './components/statistics';
import FriendList from './components/friendList';
import TransactionHistory from './components/transactionHistory';
import data from './data';

const { user, statistics, friends, transactions } = data;
// import './App.css';

export default function App() {
  return (
    <div className="container">
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" statistics={statistics} />
      </div>
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

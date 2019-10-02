import React from 'react';
import User from './user.json';
import UserProfile from './user/user';
import Stats from './stats.json';
import StatsBar from './StatsBar/statsBar';
import Friends from './friend.json';
import FriendList from './friendlist/FriendList';
import Transactions from './transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => (
  <>
    <UserProfile user={User} />
    <StatsBar title="Upload stats" stats={Stats} />
    <FriendList friends={Friends} />
    <TransactionHistory items={Transactions} />
  </>
);
export default App;

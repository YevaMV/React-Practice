import React from 'react';
import AddUsers from './components/Users/AddUsers';
import USersList from './components/Users/UsersList';

function App() {
  return (
    <div>
      <AddUsers />
      <USersList users={[]} />
    </div>
  );
}

export default App;

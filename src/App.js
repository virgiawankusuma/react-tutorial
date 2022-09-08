import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = {
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
    };

    setUser(user);
  }, []);
  return (
    <div className="app">
      <Navbar user={user} />
    </div>
  );
}

export default App;

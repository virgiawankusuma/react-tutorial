import { useEffect, useState } from 'react';
import './App.css';
import DisplayTheme from './components/DisplayTheme';
import Navbar from './components/Navbar';
import Setting from './components/Setting';
import ToggleTheme from './components/ToggleTheme';
import { AppContext } from './context/app-context';

function App() {
  const [user, setUser] = useState({});
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const user = {
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
    };

    setUser(user);
  }, []);

  const appContextValue = {
    user,
    setUser,
    theme,
    setTheme
  };

  return (
    <div className="app">
      <AppContext.Provider value={appContextValue}>
        <Navbar />
        <hr />
        <Setting />
        <hr />
        <DisplayTheme />
        <hr />
        <ToggleTheme />
      </AppContext.Provider>
    </div>
  );
}

export default App;

import { createContext, useContext, useEffect, useState } from 'react';

export const AppContext = createContext({});

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  useEffect(() => {
    const user = {
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
    };

    setUser(user);
  }, []);

  const [user, setUser] = useState({});
  const [theme, setTheme] = useState('dark');

  const appContextValue = {
    user,
    setUser,
    theme,
    setTheme
  };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
}
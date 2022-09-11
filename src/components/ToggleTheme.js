import { useContext } from 'react';
import { AppContext } from '../context/app-context';

export default function ToggleTheme() {
  const context = useContext(AppContext);

  return (
    <button
      onClick={() => {
        context.setTheme(context.theme === 'light' ? 'dark' : 'light');
      }}
    >
      Toggle Theme
    </button>
  );
}
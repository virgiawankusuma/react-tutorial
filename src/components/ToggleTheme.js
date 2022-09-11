import { useAppContext } from '../context/app-context';

export default function ToggleTheme() {
  const context = useAppContext();

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
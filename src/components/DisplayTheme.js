import { useContext } from 'react';
import { AppContext } from '../context/app-context';

export default function DisplayTheme() {
  const context = useContext(AppContext);

  return (
    <div>{context.theme}</div>
  );
}
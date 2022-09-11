import { useAppContext } from '../context/app-context';

export default function DisplayTheme() {
  const context = useAppContext

  return (
    <div>{context.theme}</div>
  );
}
import { useAppContext } from '../context/app-context';

export default function NavbarUserText() {
  const context = useAppContext();
  
  return <span>Hi, {context.user.name}!</span>
}
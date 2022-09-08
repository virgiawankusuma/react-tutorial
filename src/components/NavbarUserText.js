import { useContext } from 'react';
import { AppContext } from '../context/app-context';

export default function NavbarUserText() {
  const context = useContext(AppContext);
  
  return <span>Hi, {context.user.name}!</span>
}
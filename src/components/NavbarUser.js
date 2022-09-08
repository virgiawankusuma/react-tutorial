import NavbarUserAvatar from './NavbarUserAvatar';
import NavbarUserText from './NavbarUserText';

export default function NavbarUser(props) {
  console.log(props);
  return (
    <>
      <NavbarUserAvatar user={props.user} />
      <NavbarUserText user={props.user} />
    </>
  )
}
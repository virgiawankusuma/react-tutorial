import NavbarLink from './NavbarLink';
import NavbarUser from './NavbarUser';

export default function Navbar(props) {
  // console.log(props);
  return(
    <nav>
      <NavbarLink>Dashboard</NavbarLink> | <NavbarLink>Products |</NavbarLink>
      <NavbarLink>
        <NavbarUser user={props.user} />
      </NavbarLink>
    </nav>
  )
}
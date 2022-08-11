import { Link } from "react-router-dom";

export default function About() {
  return(
    <>
      <h1>Halaman About</h1>
      <p>Halo ini adalah halaman about, untuk tentang kami lainnya bisa klik link di bawah:</p>
      <ul>
        <li><Link to="/about/team">Team</Link></li>
      </ul>
    </>
  );
}

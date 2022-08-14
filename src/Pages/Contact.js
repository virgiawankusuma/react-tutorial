import { useEffect } from 'react';

export default function Contact() {

  useEffect(function () {
    document.title = 'Contact - Website Virgiawwan';
  }, []);

  return ( 
    <section className="section">
      <h1 className="section-title">Contact page</h1>
      <p className="section-description">Kamu dapat menghubungiku di bawah ini: </p>
      <ul>
        <li>WA: +62812341234</li>
        <li>Email: 181240000@unisnu.ac.id</li>
      </ul>
      <p className="section-description">Atau kamu dapat melihatku pansos di sosmed:</p>
      <ul>
        <li><a href="https://facebook.com/virgiawwan">Facebook</a></li>
        <li><a href="https://twitter.com/virgiawankusuma">Twitter</a></li>
      </ul>
    </section>
  );
}

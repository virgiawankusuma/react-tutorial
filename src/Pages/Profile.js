import { useEffect } from 'react';

export default function Profile() {

  useEffect(function () {
    document.title = 'Profile - Website Virgiawwan';
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Profile page</h1>
      <p className="section-description">Halo namaku virgiawan, aku adalah seorang web developer yang belum lulus dari MIT!</p>
    </section>
  );
}

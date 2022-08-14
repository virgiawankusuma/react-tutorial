import { useEffect } from 'react';

export default function Home() {
  
  useEffect(function () {
    document.title = 'Home - Website Virgiawwan';
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Selamat datang di website qu</h1>
      <p className="section-description">Halo semua, ini website baru aku. Kamu bisa mendapatkan info seputar profileku di sini, salam kenal ya. Met malem</p>
    </section>
  );
}

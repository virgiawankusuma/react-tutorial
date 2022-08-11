import { useParams } from 'react-router-dom';

export default function BlogDetail() {
  console.log(useParams());
  return(
    <>
      <h1>Blog Detail</h1>
      <p>Halo ini detail artikel {useParams().slug}</p>
    </>
  );
}
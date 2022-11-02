import Image from 'next/image';
import mike from '../../public/images/mike.webp';

export default function Page() {
  return (
    <>
      <h1>Image</h1>
      <div><Image src={mike} alt='mike'/></div>
    </>
  )
}
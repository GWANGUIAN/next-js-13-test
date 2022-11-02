import Link from 'next/link';

export default function Layout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/example">
          Example
        </Link>
        <Link href="/image">
          Image
        </Link>
        <Link href="/font">
          Font
        </Link>
      </header>
      <div>{children}</div>
    </>
  );
}
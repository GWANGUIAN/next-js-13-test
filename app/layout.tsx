import Link from 'next/link';

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <header>
          <Link href="/">
            Home
          </Link>
          <Link href="/ssr">
            SSR
          </Link>
          <Link href="/isr">
            ISR
          </Link>
          <Link href="/ssg">
            SSG
          </Link>
          <Link href="/image">
            Image
          </Link>
          <Link href="/font">
            Font
          </Link>
          <Link href="/notFound">
            NotFound
          </Link>
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
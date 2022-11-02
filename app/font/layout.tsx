import { Nanum_Pen_Script as Nanum } from '@next/font/google';

const nanum = Nanum({
  weight: '400',
});

export default function Layout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html className={nanum.className}>
      <div>{children}</div>
    </html>)
}
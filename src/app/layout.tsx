import './globals.css';
import { Fira_Sans } from 'next/font/google';

const firaSans = Fira_Sans({
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={firaSans.className}>
      <body>{children}</body>
    </html>
  );
}

import Header from '@/components/Generic/Header/Header';
import Footer from '@/components/Generic/Footer/Footer';
import './main.scss'
import { Roboto } from 'next/font/google'
import Providers from './providers';

const roboto = Roboto({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <>
          <Header />
          <Providers>
            {children}
          </Providers>
          <Footer />
        </>
      </body>
    </html>
  );
}

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import { Roboto } from "next/font/google";
import Providers from "./providers";
import Header from "@/components/Generic/Header/Header";
import Footer from "@/components/Generic/Footer/Footer";
import { ToastContainer } from "react-bootstrap";

const roboto = Roboto({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <>
          {/* <ToastContainer > */}
          <Header />
          <Providers>{children}</Providers>
          <Footer />
          {/* </ToastContainer> */}
        </>
      </body>
    </html>
  );
}

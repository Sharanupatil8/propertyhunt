import Navbar from "./_components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import AuthProvider from "./_components/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Property hunt | Find Your perfect place",
  description: "Find Your dream place",
};

function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en" className={inter.className}>
        <body>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  );
}

export default RootLayout;

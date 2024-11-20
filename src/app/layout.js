import { Inter, Roboto } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from '@/services/AuthProvider';

const roboto = Roboto({ weight: ['400', '500', '700', '900'], subsets: ['latin'], display: 'swap' })
const inter = Inter({ weight: ['400', '500', '700', '900'], subsets: ['latin'] })

export const metadata = {
  // title: "Next Hero | API",
  title: {
    default: "Next Hero API",
    template: "%s | Next Hero API"
  },
  description: "Super powerful next website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <AuthProvider>
          <Navbar></Navbar>
          <div className=" container mx-auto">
            {children}
          </div>
          <Footer></Footer>
        </AuthProvider>

      </body>
    </html>
  );
}

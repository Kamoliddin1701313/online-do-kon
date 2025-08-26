import "./globals.css";
import Providers from "../providers/Providers";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";

export const metadata = {
  title: "Online do'koni",
  description: "Next.js + Redux Toolkit bilan online do'kon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-1 mt-[110px]">{children}</main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

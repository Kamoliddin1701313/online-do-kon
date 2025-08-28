import "./globals.css";
import Providers from "../providers/Providers";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import MainLayout from "./components/mainLayouts/MainLayout";

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
            <main className="flex-1 mt-[110px]">
              <MainLayout>{children}</MainLayout>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

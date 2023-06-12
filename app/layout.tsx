import Header from "@/components/header/Header";
import "./globals.css";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import GlobalProvider from "@/providers/GlobalProvider";
import Footer from "@/components/footer/Footer";

const raleway = Raleway({
  subsets: ["latin-ext", "cyrillic-ext"],
  variable: "--font-rw",
});
const gilroy = localFont({
  src: [
    {
      path: "../public/assets/fonts/Gilroy-Light.otf",
      weight: "400",
    },
    {
      path: "../public/assets/fonts/Gilroy-ExtraBold.otf",
      weight: "700",
    },
  ],
  variable: "--font-gr",
});

export const metadata = {
  title: "Just Perfect",
  description: "Just Perfect",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GlobalProvider>
        <body className={`${raleway.variable} ${gilroy.variable}`}>
          <Header />
          {children}
          <Footer />
        </body>
      </GlobalProvider>
    </html>
  );
}

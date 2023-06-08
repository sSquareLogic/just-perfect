import "./globals.css";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";

const raleway = Raleway({
  subsets: ["latin-ext", "cyrillic-ext"],
  variable: "--font-rw",
});
const gilroy = localFont({
  src: [
    {
      path: "/assets/fonts/Gilroy-Light.otf",
      weight: "400",
    },
    {
      path: "/assets/fonts/Gilroy-ExtraBold.otf",
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
      <body className={`${raleway.variable} ${gilroy.variable}`}>
        {children}
      </body>
    </html>
  );
}

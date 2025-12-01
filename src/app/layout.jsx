import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StickyContact from "./components/StickyContact";
import Loader from "./components/Loader";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ScrollToggleButton from "./components/ScrollToggleButton";
import GtmScript from "./components/GtmScript"; // 👈 new

const inter = Inter({ subsets: ["latin"], variable: "--font-app" });

export const metadata = {
  title:
    "Best Digital Marketing Agency in Chennai | Top Digital Marketing Company | Ayatiworks",
  description:
    "Ayatiworks is a leading digital marketing agency in Chennai offering ROI-focused SEO, social media, PPC and content marketing. Grow faster with a data-driven digital marketing company trusted by Chennai’s top brands.",
  alternates: {
    canonical: "https://ayatiworks.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Icons */}
        <link rel="icon" href="/fav-icon.png" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="google-site-verification"
          content="fgOnvH2bLIta4ZKOHxHKknNJCRQzrBvamh3MMJb5ppg"
        />
      </head>

      <body
        className={`${inter.variable} font-sans bg-background text-foreground antialiased`}
      >
        {/* GTM scripts */}
        <GtmScript />

        {/* App chrome */}
        <Loader />
        <ScrollProgressBar />
        <ScrollToggleButton />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyContact />
      </body>
    </html>
  );
}

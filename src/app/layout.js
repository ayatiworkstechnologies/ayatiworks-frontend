import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StickyContact from "./components/StickyContact";
import Loader from "./components/Loader";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ScrollToggleButton from "./components/ScrollToggleButton";
import GtmScript from "./components/GtmScript";

export const metadata = {
  title:
    "Best Digital Marketing Agency in Chennai | Top Digital Marketing Company | Ayatiworks",
  description:
    "Ayatiworks is a leading digital marketing agency in Chennai offering ROI-focused SEO, social media, PPC and content marketing. Grow faster with a data-driven digital marketing company trusted by Chennai’s top brands.",
  alternates: {
    canonical: "https://ayatiworks.com/",
  },
  // 👇 let Next.js generate all the <link rel="icon"> tags
  icons: {
    icon: "/fav-icon.png",          // normal favicon
    shortcut: "/fav-icon.png",
    apple: "/fav-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="fgOnvH2bLIta4ZKOHxHKknNJCRQzrBvamh3MMJb5ppg"
        />
      </head>
      <body>
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

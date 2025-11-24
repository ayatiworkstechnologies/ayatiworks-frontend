import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StickyContact from "./components/StickyContact";
import Loader from "./components/Loader";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ScrollToggleButton from "./components/ScrollToggleButton";
import Script from "next/script";

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
        {/* 👇 Add your icons */}
        <link rel="icon" href="/fav-icon.png" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="google-site-verification" content="fgOnvH2bLIta4ZKOHxHKknNJCRQzrBvamh3MMJb5ppg" />
        {/* Google Tag Manager (loads after hydration) */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l!='dataLayer' ? '&l='+l : '';
              j.async = true;
              j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-PRN8SHB3');
          `}
        </Script>
        {/* End GTM */}
      </head>
      <body
        className={`${inter.variable} font-sans bg-background text-foreground antialiased`}
      >
        {/* Google Tag Manager (noscript) — must be inside <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PRN8SHB3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End GTM (noscript) */}
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

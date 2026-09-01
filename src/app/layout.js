import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientEnhancements from "./components/ClientEnhancements";
import Script from "next/script";
import RecaptchaProvider from "./components/RecaptchaProvider";

export const metadata = {
  metadataBase: new URL("https://www.ayatiworks.com"),
  title: "Best Digital Marketing Agency in Chennai | Top Digital Marketing Company | Ayatiworks",
  description: "Ayatiworks is a leading digital marketing agency in Chennai offering ROI-focused SEO, social media, PPC and content marketing. Grow faster with a data-driven digital marketing company trusted by Chennai’s top brands.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/fav-icon.png",
    shortcut: "/fav-icon.png",
    apple: "/fav-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="fgOnvH2bLIta4ZKOHxHKknNJCRQzrBvamh3MMJb5ppg"
        />
        <link
          rel="preload"
          href="/fonts/JockeyOne-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Nexa-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning>
        <Script id="gtm-init" strategy="lazyOnload">
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
        <Script id="hotjar" strategy="lazyOnload">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:6426186,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
        <noscript>
          <iframe
            title="Embedded Content"
            src="https://www.googletagmanager.com/ns.html?id=GTM-PRN8SHB3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ClientEnhancements />
        <RecaptchaProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </RecaptchaProvider>
      </body>
    </html>
  );
}

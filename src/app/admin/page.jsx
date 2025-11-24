export const metadata = {
  title: "Admin Login ",
  description:
    "Admin Ayati",
};
import React from "react";

import ResponsiveBanner from "../components/ResponsiveBanner";
import LoginPage from "../components/login";

export default function AdminPage() {
  return (
    <main className="section section-home">
      {/* <ResponsiveBanner
        desktopSrc="/banner/Contact.jpg"
        alt="Ayatiworks Contact Us"
        priority
        className="mb-4 sm:mb-6"
        eyebrow="Contact Us"
        title="Ready to Build Something Forward?"
        subtitle="Whether you’re refining your digital presence or starting from
                scratch, we're here to make it happen. Drop us a line—let’s
                craft an unforgettable experience."
        ctaText="Contact Us"
        ctaHref="/contact"
        height={420}
      /> */}
<LoginPage />
    </main>
  );
}

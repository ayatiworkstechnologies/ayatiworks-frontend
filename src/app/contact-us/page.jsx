export const metadata = {
  title: "Contact Us",
  description:
    "Ready to grow your brand? Connect with Chennai’s top digital marketing experts today for tailored solutions that drive results! Reach out now!",
    alternates: { canonical: "https://ayatiworks.com/contact-us", }
};
import React from "react";
import HeroSection from "../components/Home/HeroSection";
import ContactInnerPage from "../components/Contact/ContactInnerPage";
import Form from "../components/Contact/Form";
import Address from "../components/Contact/Address";
import Digital from "../components/Contact/Digital";
import Brand from "../components/Contact/Brand";
import Map from "../components/Contact/Map";
import PartnersInClimb from "../components/Home/PartnersInClimb";
import Location from "../components/Contact/Location";
import Connection from "../components/Home/Connection";
import ResponsiveBanner from "../components/ResponsiveBanner";

export default function ContactPage() {
  return (
    <main className="section section-home">
      <ResponsiveBanner
        desktopSrc="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/Contact.jpg"
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
      />

      {/* Hero / Intro */}
      {/* <HeroSection /> */}
      {/* <ContactInnerPage /> */}
      <Form />
      <Address />
      <Digital />
      <Brand />
      <Map />
      <PartnersInClimb />
      <Location />
      <Connection />
    </main>
  );
}

'use client'

import Cases from "@/components/Cases/Cases";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Offers from "@/components/Offers/Offers";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="hero" className="sectionAnchor"><Hero /></section>
      <section id="services" className="sectionAnchor"><Services /></section>
      <section id="offers" className="sectionFull"><Offers /></section>
      <section id="cases" className="sectionAnchor"><Cases /></section>
      <section id="contacts" className="sectionAnchor"><Contacts /></section>
      <section className="sectionAnchor"><Footer /></section>
    </main>
  );
}

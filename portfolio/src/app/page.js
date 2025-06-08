'use client'
import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Work from "../components/work";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

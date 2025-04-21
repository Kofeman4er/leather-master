
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import PreviousWorks from "./components/Works";
import Reviews from "./components/Review";
import QA from "./components/QA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <PreviousWorks />
      <Reviews />
      <QA />
      <Contact />
      <Footer />
    </>
  );
}

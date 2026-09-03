import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main className="flex flex-col gap-0">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <main className="flex flex-col gap-0">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

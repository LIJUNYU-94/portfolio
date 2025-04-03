import About from "./pages/Aboutme";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
function Content({ page }) {
  return (
    <div className="content">
      {page === "about" && <About />}
      {page === "skills" && <Skills />}
      {page === "experience" && <Experience />}
      {page === "works" && <Works />}
      {page === "contact" && <Contact />}
      {page === null && <></>}
    </div>
  );
}

export default Content;

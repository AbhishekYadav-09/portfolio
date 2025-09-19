import { useState } from "react";
import About from "./component/about.component";
import Projects from "./component/project.component";
// import Articles from "./component/artical.component";
import Contact from "./component/contact.component";
import { Link } from "react-scroll"; 


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#0d0d0d] relative">
        <nav className="flex items-center justify-between px-6 md:px-8 py-4 bg-[#1A1A1A] border-b border-[#333333] relative z-50">
          <div className="text-[#FFFFFF] text-xl md:text-2xl font-bold">
            <span className="text-[#FF6700]">root</span>@abhishek
          </div>

          <ul className="hidden md:flex gap-6 text-lg">
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="text-[#FFFFFF] cursor-pointer hover:text-[#FF6700] transition-colors duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-[#FFFFFF] cursor-pointer hover:text-[#FF6700] transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-[#FFFFFF] cursor-pointer hover:text-[#FF6700] transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>

        
          <div
            className="md:hidden text-[#FFFFFF] text-3xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776; 
          </div>
        </nav>

        
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#1A1A1A] border-l border-[#333] transform transition-transform duration-300 ease-in-out z-40
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-[#FFFFFF] text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </button>
          </div>

          
          <ul className="flex flex-col gap-6 mt-8 ml-6">
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="text-[#FFFFFF] cursor-pointer hover:text-[#FF6700] transition-colors duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="text-[#FFFFFF] cursor-pointer hover:text-[#FF6700] transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="text-[#FFFFFF] cursor-pointer hover:text-[#FF6700] transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        
        <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-8 flex-1">
          <div className="absolute top-16 left-1/2 md:left-20 text-orange-500 opacity-20 text-5xl md:text-7xl -translate-x-1/2 md:translate-x-0">
            &lt;/&gt;
          </div>
          <div className="absolute bottom-10 right-6 md:right-16 text-orange-500 opacity-20 text-4xl md:text-5xl">
            &lt;/&gt;
          </div>
          <div className="flex flex-col items-start flex-1 mb-8 md:mb-0">
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FFFFFF] p-2 font-bold">
              Hello{" "}
              <span className="text-[#FF6700] text-5xl sm:text-6xl md:text-7xl">
                .
              </span>
              <hr className="border-0" />
              <span className="text-[#FF6700] text-5xl sm:text-6xl md:text-7xl">
                ___
              </span>
              I'm Abhishek Yadav
            </p>

            <p className="text-3xl sm:text-4xl md:text-6xl text-[#FFFFFF] Fira_Code mt-4">
              Web Developer
            </p>
            <div className="flex flex-row gap-4 mt-6 flex-wrap sm:flex-nowrap">
              <button  className="p-3.5 bg-[#FF6700] text-[#FFFFFF] hover:bg-[#1A1A1A] rounded transition duration-300">
               <a href="mailto:abhishekyadavcode@gmail.com">Got a Project</a>
              </button>
              <button className="p-3 border-2 border-[#FF6700] text-[#FFFFFF] hover:bg-[#FF6700] rounded transition duration-300">
                My Resume
              </button>
            </div>
          </div>
          <div
            className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-[#FF6700] rounded-2xl bg-cover bg-center"
            style={{ backgroundImage: "url('./public/image.png')" }}
          ></div>
        </section>
      </div>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
      
      // Update active section based on scroll position
      const sections = ["about", "speakers", "key topic", "partners", "tickets", "register"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (title) => {
    setIsOpen(false);
    const element = document.getElementById(title);
    if (element) {
      const offset = -100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const NavLink = ({ title }) => (
    <motion.span
      onClick={() => scrollToSection(title)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        "base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5",
        activeSection === title && "nav-active"
      )}
    >
      {title}
    </motion.span>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]",
      )}
    >
      <div className="container flex h-14 items-center justify-between gap-20 max-lg:px-5">
        {/* Logo */}
        <a className="cursor-pointer z-2">
          <img
            src="/images/logo.png"
            width={160}
            height={55}
            alt="logo"
          />
        </a>

        <div className={clsx(
          "flex-1 ml-20 max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
          isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
        )}>
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex justify-end gap-8 max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="about" />
                </li>
                <li className="nav-li">
                  <NavLink title="speakers" />
                </li>
                <li className="nav-li">
                  <NavLink title="key topic" />
                </li>
                <li className="nav-li">
                  <NavLink title="partners" />
                </li>
                <li className="nav-li">
                  <NavLink title="tickets" />
                </li>
                <li className="nav-li">
                  <NavLink title="register" />
                </li>
                
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;

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
      const sections = ["about", "speakers", "key topics", "partners", "tickets", "register"];
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
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const NavLink = ({ title }) => (
    <motion.span
      onClick={() => scrollToSection(title)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        "text-sm font-medium uppercase tracking-wide transition-all duration-300 cursor-pointer",
        "hover:text-[#00A3FF] relative py-2",
        activeSection === title ? "text-[#00A3FF]" : "text-white/80",
        "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px]",
        "after:bg-[#00A3FF] after:scale-x-0 after:origin-right after:transition-transform after:duration-300",
        "hover:after:scale-x-100 hover:after:origin-left",
        activeSection === title && "after:scale-x-100"
      )}
    >
      {title}
    </motion.span>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full transition-all duration-500",
        hasScrolled 
          ? "py-4 bg-black/80 backdrop-blur-md border-b border-white/5" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          className="cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img
            src="/images/logo.png"
            width={140}
            height={48}
            alt="logo"
            className="object-contain"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {["about", "speakers", "key topics", "partners", "tickets", "register"].map((title) => (
              <li key={title}>
                <NavLink title={title} />
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? "0%" : "100%" }}
          transition={{ duration: 0.3 }}
          className={clsx(
            "fixed top-0 right-0 w-full h-screen bg-black/95 backdrop-blur-lg lg:hidden",
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {["about", "speakers", "key topics", "partners", "tickets", "register"].map((title) => (
              <NavLink key={title} title={title} />
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { motion, AnimatePresence } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      className="hover:text-primary transition-colors"
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClass = `fixed w-full z-50 transition-all ${
    isScrolled
      ? "bg-white bg-opacity-80 backdrop-blur-md dark:bg-slate-900 dark:bg-opacity-80 shadow-sm"
      : "bg-transparent"
  }`;

  return (
    <nav className={navbarClass}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-bold text-xl tracking-tight">
          <span className="text-primary">Hrithik</span> Chauhan
        </a>

        <div className="hidden md:flex space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <XIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-800 shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <NavLink href="#about" onClick={closeMobileMenu}>
                About
              </NavLink>
              <NavLink href="#skills" onClick={closeMobileMenu}>
                Skills
              </NavLink>
              <NavLink href="#projects" onClick={closeMobileMenu}>
                Projects
              </NavLink>
              <NavLink href="#experience" onClick={closeMobileMenu}>
                Experience
              </NavLink>
              <NavLink href="#contact" onClick={closeMobileMenu}>
                Contact
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

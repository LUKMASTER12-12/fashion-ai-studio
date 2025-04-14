import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Add custom font for logo
  const logoFont = "font-serif italic";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass = transparent
    ? isScrolled
      ? "fixed top-0 left-0 right-0 bg-white shadow-md transition-all duration-300 z-50"
      : "absolute top-0 left-0 right-0 z-50 transition-all duration-300"
    : "bg-white shadow-sm";

  const textClass = transparent && !isScrolled ? "text-white" : "text-gray-900";
  const navTextClass =
    transparent && !isScrolled ? "text-white" : "text-gray-700";

  return (
    <header className={`w-full py-4 ${headerClass}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={transparent && !isScrolled ? "white" : "#4f46e5"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 mr-2"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.29 7 12 12 20.71 7"></polyline>
              <line x1="12" y1="22" x2="12" y2="12"></line>
            </svg>
            <h1 className={`text-xl ${logoFont} tracking-tight ${textClass}`}>
              <span className="font-bold">AI</span> Fashion Studio
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex space-x-8 ${navTextClass}`}>
          <a
            href="#features"
            className={`font-medium hover:text-indigo-600 transition-colors ${isScrolled ? "" : "hover:text-indigo-300"} text-shadow-sm`}
          >
            Features
          </a>
          <a
            href="#pricing"
            className={`font-medium hover:text-indigo-600 transition-colors ${isScrolled ? "" : "hover:text-indigo-300"} text-shadow-sm`}
          >
            Pricing
          </a>
          <Link
            to="/try-on"
            className={`font-medium hover:text-indigo-600 transition-colors ${isScrolled ? "" : "hover:text-indigo-300"} text-shadow-sm`}
          >
            Virtual Try-On
          </Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button
              variant={isScrolled ? "outline" : "secondary"}
              className={`font-medium ${isScrolled ? "text-indigo-600 border-indigo-600 hover:bg-indigo-50" : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-0"} rounded-full px-6`}
            >
              Log in
            </Button>
          </Link>
          <Link to="/register">
            <Button className="font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300">
              Sign up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={textClass} />
          ) : (
            <Menu className={textClass} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="font-medium text-gray-700 hover:text-indigo-600 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="font-medium text-gray-700 hover:text-indigo-600 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <Link
              to="/try-on"
              className="font-medium text-gray-700 hover:text-indigo-600 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Virtual Try-On
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant="ghost"
                  className="w-full justify-start font-medium"
                >
                  Log in
                </Button>
              </Link>
              <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

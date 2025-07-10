import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!isMenuOpen && (
        <header
          className={`w-full flex justify-between p-3 bg-white sticky top-0 z-50 transition-all duration-300 ${
            hasScrolled
              ? "backdrop-blur-sm bg-white/80 shadow-lg"
              : "bg-purple-100"
          }`}
        >
          <h1 className="text-3xl font-bold pl-5">
            <span className="text-purple-700">Pulse</span>Digital
          </h1>
          <nav className="hidden md:flex justify-between gap-6">
            {[
              "Home",
              "About",
              "Services",
              "Solutions",
              "Testimonials",
              "Partners",
              "Contact",
            ].map((id) => (
              <Link
                key={id}
                to={id}
                smooth={true}
                duration={500}
                className="font-semibold hover:text-purple-700 hover:underline hover:underline-offset-4 text-md cursor-pointer"
              >
                {id}
              </Link>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
            <Menu size={30} />
          </button>
        </header>
      )}

      {isMenuOpen && (
        <header className="flex p-3 border bg-white/70 backdrop-blur-md w-full sticky top-0 z-50 shadow">
          <div className="w-full">
            <div className="flex justify-end pr-10">
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={30} />
              </button>
            </div>
            <div className="flex flex-col gap-3 pl-10">
              {[
                "Home",
                "About",
                "Services",
                "Solutions",
                "Testimonials",
                "Partners",
                "Contact",
              ].map((id) => (
                <Link
                  key={id}
                  to={id}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-semibold hover:text-purple-700 text-md cursor-pointer"
                >
                  {id}
                </Link>
              ))}
            </div>
          </div>
        </header>
      )}
    </>
  );
}

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isMenuOpen && (
        <header className="w-full flex justify-around py-5  bg-white z-50 sticky top-0 shadow">
          <h1 className="text-3xl font-bold">
            <span className="text-purple-700">Pulse</span>Digital
          </h1>
          <nav className="hidden md:flex justify-between w-2/3">
            {[
              "Home",              
              "About",
              "Services",
              "Solutions",
              "Partners",
              "Testimonials",
              "Contact",
            ].map((id) => (
              <Link
                to={id}
                smooth={true}
                duration={500}
                className="font-semibold hover:text-purple-700 hover:underline hover:underline-offset-4 text-lg cursor-pointer"
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
        <header className="flex p-5 border bg-white w-full sticky top-0 z-50 shadow">
          <div className="py-4 w-full">
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
                "Partners",
                "Testimonials",
                "Contact",
              ].map((id) => (
                <Link
                  key={id}
                  to={id}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-semibold hover:text-purple-700 text-lg cursor-pointer"
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

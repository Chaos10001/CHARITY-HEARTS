import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-white ">
      {/* desktop */}

      <nav className=" __navbar_content">
        <div className="flex flex-row justify-between items-center __ar_one_sans space-x-8">
          <div className="flex flex-row items-center gap-x-3">
            <h1 className="text-primary font-bold text-2xl">CHARITY HEARTS</h1>
          </div>
          <div className="space-x-6">
            <a href="#about">About</a>
            <a href="#service">Services</a>
            <a href="#choose">Why Choose Us</a>
            <a href="#help">How We Can Help</a>
          </div>
          <div>
            <button className="bg-primary px-[1.8rem] py-[0.5rem] rounded-full text-white">
              <a href="#help">Contact Us</a>
            </button>
          </div>
        </div>
      </nav>

      {/* mobile */}
      <nav className="__navbar_sm_content">
        <div className="flex flex-row items-center gap-x-3">
          <h1 className="text-primary font-bold text-lg">CHARITY HEARTS</h1>
        </div>
        {isMenuOpen ? (
          <div
            onClick={toggleMenu}
            className=" w-10 h-10 rounded-full me-4 cursor-pointer text-black"
          >
            <AiOutlineClose className="h-4 w-4 text-primary cursor-pointer" />
          </div>
        ) : (
          <div className="hamburger" onClick={toggleMenu}>
            <HiMenuAlt4 className="h-8 w-8 text-primary cursor-pointer" />
          </div>
        )}
      </nav>
      <div className="md:hidden">
        {isMenuOpen && (
          <div className="__ar_one_sans flex flex-col bg-white w-screen h-screen px-4 pt-4 z-40 fixed top-0 left-0">
            <div
              onClick={toggleMenu}
              className="w-10 h-10 rounded-full cursor-pointer text-black mx-[90%]"
            >
              <AiOutlineClose className="h-6 w-6 text-black cursor-pointer" />
            </div>

            <div className="flex flex-col items-start space-y-9 pt-7">
              <a className="nav__Links" onClick={toggleMenu} href="#about">
                About
              </a>
              <a className="nav__Links" onClick={toggleMenu} href="#service">
                Services
              </a>
              <a className="nav__Links" onClick={toggleMenu} href="#choose">
                Why Choose Us
              </a>
              <a className="nav__Links" onClick={toggleMenu} href="#help">
                How We Can Help
              </a>
            </div>
            <div className="text-center pt-[15rem]">
              <button className="bg-primary px-[2rem] py-[0.5rem] rounded-full text-white">
                <a href="#help">Contact Us</a>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

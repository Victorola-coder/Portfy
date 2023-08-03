import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const Links = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Services",
      path: "/#services",
    },
    {
      label: "About",
      path: "/",
    },
    {
      label: "Portfolio",
      path: "/",
    },
    {
      label: "Contact",
      path: "/",
    },
  ];
  return (
    <div className="containers mx-auto">
      <div className="top_gradient"></div>
      <nav className="mx-auto mt-[19px] flex justify-between items-center  md:px-[50px] md:mt-[33px]">
        <Link to="/">
          <div className="flex items-center -space-x-[10px]">
            <img src={logo} alt="logo" />
            <span className="font-capriola font-semibold text-[20px] leading-6 md:text-[30px] md:leading-[34.72px] ">
              ickyJay
            </span>
          </div>
        </Link>
        <div className="navbar_gradient"></div>
        {/* Desktop Navbar */}
        <div className="hidden md:block">
          <ul className={`flex gap-[50px]`}>
            {Links.map((navLink, index) => (
              <NavLink key={index} to={navLink.path}>
                {({ isActive }) => (
                  <div
                    className={`before:content-[''] font-roboto text-[16px] leading-normal before:bg-[#FF4F6] hover:border-b-[#FF4F6E] hover:border-b-2 transition-all duration-100 before:absolute before:h-1 before:-bottom-1 before:transition-all before:duration-300 ${
                      isActive
                        ? "text-[#4C686F] before:w-full"
                        : "text-white before:w-[0px] hover:before:w-full"
                    } relative`}
                  >
                    {navLink.label}
                  </div>
                )}
              </NavLink>
            ))}
          </ul>
        </div>
        <motion.div
          className="hidden md:block"
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.2 }}
        >
          <Link to="/talk" className="shadow-talk">
            <button className="bg-[#009DAE] sm:pt-[10px] rounded-[5px] md:pt-[13px] md:pb-[12px] px-[16px] font-ubuntu font-bold text-[15px] leading-[17.24px] text-[#FFFFFF] max-[w-[68px] ">
              Let{"'"}s Talk
            </button>
          </Link>
        </motion.div>
        {/* mobile Navbar */}
        <div className="md:hidden overflow-hidden">
          <div className="block md:hidden">
            <button
              className="space-y-1.5"
              onClick={() => setIsOpened(!isOpened)}
            >
              <div
                className={`transition-all duration-300 bg-[#4C686F] h-0.5 w-6 ${
                  isOpened
                    ? "rotate-45 translate-y-[0.26rem]"
                    : "translate-y-0 rotate-0"
                }`}
              />
              <div
                className={`transition-all duration-300 bg-[#4C686F] h-0.5 w-6 ${
                  isOpened ? "hidden" : "block"
                }`}
              />
              <div
                className={`transition-all duration-300 bg-[#4C686F] h-0.5 w-6 ${
                  isOpened
                    ? "-rotate-45 -translate-y-[0.24rem]"
                    : "translate-y-0 rotate-0"
                }`}
              />
            </button>
            <div
              className={`overflow-hidden bg-[#fefefe] absolute block max-w-[400px] mx-auto rounded-lg mt-[15px] md:hidden z-10 transition-all duration-300 ${
                isOpened ? " translate-x-[7%]" : "-translate-y-[150%]"
              } pt-4 left-0 right-0`}
            >
              <ul className="mx-auto px-3">
                <div className="flex flex-col items-start gap-[24px] justify-between mb-[22px]">
                  {Links.map((navLink, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-1"
                      onClick={() => setIsOpened(!isOpened)}
                    >
                      <div
                        className={`group-hover:h-9 bg-[#010E21] w-1 rounded-full h-1 transition-all duration-300`}
                      ></div>
                      <li className="py-2 w-full">
                        <Link
                          to={navLink.path}
                          className="text-[#4C686F] font-roboto font-normal text-[14px] leading-[18.23px] font-dm p-3 rounded-lg transition-all duration-300 hover:text-[#FF4F6E]"
                        >
                          {navLink.label}
                        </Link>
                      </li>
                    </div>
                  ))}
                </div>
              </ul>
              <Link to="/talk">
                <motion.div
                  className="w-full bg-[#009DAE] hover:bg-[#009DAE]/90 text-center rounded-[10px] transition-all duration-200"
                  whileTap={{ scale: 1.1 }}
                >
                  <button className="w-fit shadow-talk p-3 px-[16px] font-ubuntu font-bold text-[15px] leading-[17.24px] text-[#FFFFFF]">
                    Let{"'"}s Talk
                  </button>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

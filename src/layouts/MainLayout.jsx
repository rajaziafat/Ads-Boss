import clsx from "clsx";
import Button from "components/common/Button";
import Section from "components/common/Section";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <div className="bg-dark-1">
      <div className="sticky top-0 bg-dark-1 z-50">
        <div className="px-5 md:px-10 xl:px-20 py-5 bg-[#00000059] border-b border-solid border-[#606060]">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img
                className="w-32 lg:w-auto"
                src="/assets/logo.svg"
                alt="logo"
              />
            </Link>

            <div className="lg:hidden" onClick={() => setIsMenuActive(true)}>
              <img
                className="w-10"
                src="/assets/hamburger.svg"
                alt="hamburger"
              />
            </div>

            <div
              className={clsx(
                "flex flex-col lg:flex-row px-10 pt-20 pb-10 lg:px-0 lg:py-0 lg:items-center gap-12 xl:gap-[176px] fixed bg-black lg:bg-transparent top-0 h-full lg:static lg:h-auto z-50 w-[320px] lg:w-auto transition-all",
                isMenuActive ? "right-0" : "-right-[320px]"
              )}
            >
              <div
                className="lg:hidden font-bold text-5xl absolute top-5 right-5 text-white"
                onClick={() => setIsMenuActive(false)}
              >
                &times;
              </div>
              <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 lg:items-center text-[25px] text-[#d9d9d9]">
                <Link to="/">About</Link>
                <Link to="/">Services</Link>
                <Link to="/">Contact</Link>
              </div>

              <Button green>Get a quote</Button>
            </div>
          </div>
        </div>
      </div>
      <Outlet />

      <Section className="py-20">
        <div className="flex justify-between flex-wrap items-center gap-16">
          <Link to="/">
            <img className="w-[136px]" src="/assets/logo.svg" alt="logo" />
          </Link>

          <div className="flex justify-between items-center gap-[35px] flex-wrap">
            <Link className="text-[#D9D9D9] sm:min-w-20 text-xl" to="/">
              About
            </Link>
            <Link className="text-[#D9D9D9] sm:min-w-20 text-xl" to="/">
              Services
            </Link>
            <Link className="text-[#D9D9D9] sm:min-w-20 text-xl" to="/">
              Contact
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default MainLayout;

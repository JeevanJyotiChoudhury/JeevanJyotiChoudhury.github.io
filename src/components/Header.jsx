import React, { useLayoutEffect, useState } from "react";
import { Menu, X } from "react-feather";
import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate } from "react-router-dom";
import NavLink from "./NavLink";
import resume from "../doc/Jeevan_Jyoti_Resume.pdf";

export default function Header() {
  const navigate = useNavigate();
  const navLinks = [
    {
      label: "Home",
      scrollTo: "home",
      defaultChecked: true,
      class: "nav-link home",
    },
    {
      label: "About Me",
      scrollTo: "about",
      class: "nav-link about",
    },
    {
      label: "Skills",
      scrollTo: "services",
      class: "nav-link skills",
    },
    {
      label: "Projects",
      scrollTo: "work",
      class: "nav-link projects",
    },
    // {
    //   label: "Resume",
    //   scrollTo: "resume",
    //   class: "nav-link resume",
    // },
    {
      label: "Contact",
      scrollTo: "contact",
      class: "nav-link contact",
    },
  ];
  const [isNavOpen, setIsNavOpen] = useState(true);
  useLayoutEffect(() => {
    if (window.innerWidth < 950) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 950) {
        setIsNavOpen(false);
      } else {
        setIsNavOpen(true);
      }
    });
  }, []);

  return (
    <div className="header" id="nav-menu">
      <div className="header__content">
        <button
          className="header__content__menu"
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
          title="menu open/close"
        >
          {isNavOpen ? (
            <X size={20} color="currentColor" />
          ) : (
            <Menu size={20} color="currentColor" />
          )}
        </button>
        {isNavOpen ? (
          <div className="header__content__nav">
            <OutsideClickHandler
              onOutsideClick={() => {
                if (window.innerWidth < 950) {
                  setIsNavOpen(false);
                }
              }}
            >
              <div className="header__content__nav__wrapper">
                <div className="header__content__nav__links">
                  {navLinks.map((link, index) => (
                    <div className={link.class}>
                      <NavLink
                        key={link.label}
                        index={index}
                        label={link.label}
                        scrollTo={link.scrollTo}
                        defaultChecked={link.defaultChecked}
                      />
                    </div>
                  ))}
                </div>
                <div className="header__content__nav__button">
                  <div className="header__content__nav__button__content nav-link resume">
                    <a
                      id="resume-link-1"
                      href={resume}
                      className="home_section_button"
                      title="Download CV"
                      target="_blank"
                      rel="noreferrer"
                      download
                    >
                      <button id="resume-button-1" className="myBtn">Resume</button>
                    </a>
                  </div>
                </div>
              </div>
            </OutsideClickHandler>
          </div>
        ) : null}
      </div>
    </div>
  );
}

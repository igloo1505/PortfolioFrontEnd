import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/white_logo_transparent_background.png";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import { gsap } from "gsap";
import NavbarNavigationSection from "./NavbarNavigationSection";
import ReactGA from "react-ga";

//   TODO Change second link to blog link in socialHeader list
//   TODO Add hamburger menu for mobile
const Navbar = ({ setModalIsOpen, open, currentPath }) => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const handleBurgerClick = () => {
    if (!burgerIsOpen) {
      // gsap.to(".slideOutDiv", {
      //     duration: 0.5,
      //     x: -230
      // })
      let elements = document.getElementsByClassName("burger-lines");
      let el = elements[0];
      el.classList.add("burgerWasClicked");
      let hiddenMenu = document.getElementsByClassName("slideOutDivHidden");
      hiddenMenu = hiddenMenu[0];
      hiddenMenu.classList.remove("slideOutDivHidden");
      hiddenMenu.classList.add("slideOutDiv");
    }
    if (burgerIsOpen) {
      //   gsap.to(".slideOutDiv", {
      //     duration: 1,
      //     x: 230,
      //   });
      let elements = document.getElementsByClassName("burger-lines");
      let hiddenMenu = document.getElementsByClassName("slideOutDiv");
      hiddenMenu = hiddenMenu[0];
      let el = elements[0];
      el.classList.remove("burgerWasClicked");
      hiddenMenu.classList.remove("slideOutDiv");
      hiddenMenu.classList.add("slideOutDivHidden");
    }
    setBurgerIsOpen(!burgerIsOpen);
  };

  const handleSkillsClick = () => {
    ReactGA.event({
      category: "Skills",
      action: "SkillsNavbarClick",
      value: "Skills",
      label: "Skills",
    });
    gsap.to(window, {
      duration: 2,
      scrollTo: {
        y: "#skillsSection",
        offsetY: 50,
      },
    });
  };
  const handleWorkClick = () => {
    ReactGA.event({
      category: "Work",
      action: "WorkNavbarClick",
      value: "Work",
      label: "Work",
    });
    gsap.to(window, {
      duration: 2,
      scrollTo: {
        y: ".featured",
        offsetY: 50,
      },
    });
  };

  return (
    <div className="nav-container">
      <NavbarNavigationSection
        currentPath={currentPath}
        handleWorkClick={handleWorkClick}
        handleSkillsClick={handleSkillsClick}
        burgerIsOpen={burgerIsOpen}
        handleBurgerClick={handleBurgerClick}
      />
    </div>
  );
};

export default Navbar;

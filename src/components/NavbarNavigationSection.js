import React, { Fragment } from "react";
import Burger from "@animated-burgers/burger-squeeze";
import { socialLinks } from "../UniversalData";
import { gitHubSvg, linkedInSvg, mediumSvg } from "../assets/svg";
import { GrNotes } from "react-icons/gr";
import { Link } from "react-router-dom";

const NavbarNavigationSection = ({
  currentPath,
  handleWorkClick,
  handleSkillsClick,
  handleBurgerClick,
  burgerIsOpen,
}) => {
  if (currentPath === "landing") {
    return (
      <Fragment>
        <header id="navbarHeader">
          <div className="headerOverlayLanding">
            <i className="logoFont">
              Igl<span className="innerLogoText">ooDevelo</span>pment
            </i>
            <nav>
              <ul className="inlineNavUl">
                <li className="inlineNavLinks" onClick={handleWorkClick}>
                  <a href="#!">My Work</a>
                </li>
                <li className="inlineNavLinks" onClick={handleSkillsClick}>
                  <a href="#!">My Skills</a>
                </li>
                <li className="inlineNavLinks modal-trigger">
                  <a href="#contactModal" className="modal-trigger">
                    Contact Me
                  </a>
                </li>
                <li className="burgerButtonLi">
                  <Burger
                    className="burgerButton"
                    isOpen={burgerIsOpen}
                    onClick={handleBurgerClick}
                  />
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="socialHeader">
          <ul>
            <li style={{ display: socialLinks.github.display }}>
              <a
                target="_blank"
                rel="noreferrer"
                href={socialLinks.github.link}
              >
                {gitHubSvg("#000")}
              </a>
            </li>
            <li style={{ display: socialLinks.linkedIn.display }}>
              <a
                target="_blank"
                rel="noreferrer"
                href={socialLinks.linkedIn.link}
              >
                {linkedInSvg("#000", "auto", "auto")}
              </a>
            </li>
            <li style={{ display: socialLinks.linkedIn.display }}>
              <Link rel="noreferrer" to="/resume" style={{ height: "100%" }}>
                <GrNotes
                  style={{
                    width: "auto",
                    height: "32px",
                    marginTop: "3px",
                    display: "block",
                  }}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="slideOutDivHidden">
          <ul className="slideOutMenu">
            <li
              className="slideOutMenuItem"
              onClick={() => {
                handleSkillsClick();
                handleBurgerClick();
              }}
            >
              <a href="#!">My Skills</a>
            </li>
            <li
              className="slideOutMenuItem"
              onClick={() => {
                handleWorkClick();
                handleBurgerClick();
              }}
            >
              <a href="#!">My Work</a>
            </li>
            <li className="slideOutMenuItem" onClick={handleBurgerClick}>
              <a href="#contactModal" className="modal-trigger">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  } else if (currentPath === "gallery") {
    return (
      <Fragment>
        <header>
          <div className="headerOverlayGallery">
            <div className="logoFont">
              Igl<span className="innerLogoText">ooDevelo</span>pment
            </div>
            <nav>
              <ul className="inlineNavUl">
                <li className="inlineNavLinks">
                  <a href="/landing">Home Page</a>
                </li>
                <li className="inlineNavLinks modal-trigger">
                  <a href="#contactModal" className="modal-trigger">
                    Contact Me
                  </a>
                </li>
                <li className="burgerButtonLi">
                  <Burger
                    className="burgerButton"
                    isOpen={burgerIsOpen}
                    onClick={handleBurgerClick}
                  />
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="socialHeader">
          <ul>
            <li style={{ display: socialLinks.github.display }}>
              <a
                target="_blank"
                rel="noreferrer"
                href={socialLinks.github.link}
              >
                {gitHubSvg("#000")}
              </a>
            </li>
            <li style={{ display: socialLinks.linkedIn.display }}>
              <a
                target="_blank"
                rel="noreferrer"
                href={socialLinks.linkedIn.link}
              >
                {linkedInSvg("#000", "auto", "auto")}
              </a>
            </li>
            <li style={{ display: socialLinks.linkedIn.display }}>
              <Link rel="noreferrer" to="/resume" style={{ height: "100%" }}>
                <GrNotes
                  style={{
                    width: "auto",
                    height: "32px",
                    marginTop: "3px",
                    display: "block",
                  }}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="slideOutDivHidden">
          <ul className="slideOutMenu">
            <li
              className="slideOutMenuItem"
              onClick={() => {
                handleBurgerClick();
              }}
            >
              <a href="/landing">Home Page</a>
            </li>
            <li className="slideOutMenuItem" onClick={handleBurgerClick}>
              <a href="#contactModal" className="modal-trigger">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
};

export default NavbarNavigationSection;

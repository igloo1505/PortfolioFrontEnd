import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../assets/white_logo_transparent_background.png'
import '@animated-burgers/burger-squeeze/dist/styles.css'
import Burger from '@animated-burgers/burger-squeeze' 
import {gsap} from "gsap"
import ReactGA from 'react-ga'
import {
    faHtml5,
    faCss3Alt,
    faReact,
    faJs,
    faNodeJs,
    faGit,
    faNpm,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";
import {faPen} from '@fortawesome/free-solid-svg-icons'
import {AppColors, socialLinks} from '../UniversalData'
import {gitHubSvg, linkedInSvg, mediumSvg} from '../assets/svg'

//   TODO Change second link to blog link in socialHeader list
//   TODO Add hamburger menu for mobile
const Navbar = ({setModalIsOpen, open}) => {
    const [burgerIsOpen, setBurgerIsOpen] = useState(false)
    const handleBurgerClick = () => {
        if(!burgerIsOpen){
            gsap.to(".slideOutDiv", {
                duration: 0.5,
                x: -230
            })
            let el = document.getElementsByClassName("burger-lines");
            el[0].classList.add("burgerWasClicked")
        }
        if(burgerIsOpen){
            gsap.to(".slideOutDiv", {
                duration: 1,
                x: 230
            })
            let el = document.getElementsByClassName("burger-lines");
            el[0].classList.remove("burgerWasClicked")
        }
        setBurgerIsOpen(!burgerIsOpen)
    }

    const handleSkillsClick = () => {
        ReactGA.event({ 
            category: 'Skills',
        action: 'SkillsNavbarClick',
        value: "Skills",
        label: "Skills"
          })
        gsap.to(window, {
            duration: 2,
            scrollTo: {
                y: "#skillsSection",
                offsetY: 50
            }
        })
    }
    const handleWorkClick = () => {
        ReactGA.event({ 
            category: 'Work',
        action: 'WorkNavbarClick',
        value: "Work",
        label: "Work"
          })
        gsap.to(window, {
            duration: 2,
            scrollTo: {
                y: ".featured",
                offsetY: 50
            }
        })
    }


    return (
        <div className="nav-container">
        <header>
        <i class="logoFont">Igl<span className="innerLogoText">ooDevelo</span>pment</i>
        <nav>
        <ul className="inlineNavUl">
        <li className="inlineNavLinks" onClick={handleWorkClick}><a href="#!">My Work</a></li>
        <li className="inlineNavLinks" onClick={handleSkillsClick}><a href="#!">My Skills</a></li>
        <li className="inlineNavLinks modal-trigger"><a href="#contactModal" className="modal-trigger">Contact Me</a></li>
        <li className="burgerButtonLi">
        <Burger className="burgerButton" isOpen={ burgerIsOpen } onClick={handleBurgerClick}/>
        </li>
        </ul>
        </nav>
        </header>
        <div className="socialHeader">
        <ul>
        <li style={{display: socialLinks.github.display}}><a target="_blank" rel="noreferrer" href={socialLinks.github.link}>{gitHubSvg("#000")}</a></li>
        <li style={{display: socialLinks.linkedIn.display}}><a target="_blank" rel="noreferrer" href={socialLinks.linkedIn.link}>{linkedInSvg("#000", "auto", "auto")}</a></li>
        <li style={{display: socialLinks.blog.display}}><a target="_blank" rel="noreferrer" href={socialLinks.blog.link}>{mediumSvg("#000", "auto", "auto")}</a></li>
        
        </ul>
        </div>
        <div className="slideOutDiv">
        <ul className="slideOutMenu">
        <li className="slideOutMenuItem" onClick={() => {
            handleSkillsClick()
            handleBurgerClick()
        }}>
        <a href="#!">My Skills</a>
        </li>
        <li className="slideOutMenuItem" onClick={() => {
            handleWorkClick()
            handleBurgerClick()
        }
        }>
        <a href="#!">My Work</a>
        </li>
        <li className="slideOutMenuItem" onClick={handleBurgerClick}>
        <a href="#contactModal" className="modal-trigger">Contact Me</a>
        </li>
        </ul>
        </div>
        </div>
    )
}

export default Navbar

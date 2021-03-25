import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import M from "materialize-css/dist/js/materialize.min.js";
import ReactGA from 'react-ga'
import "./css/MaterializeModal.css"
import './css/App.css';
import ttiPolyfill from 'tti-polyfill'
import HeroSection from './components/HeroSection'
import FeaturedSection from './components/FeaturedSection'
import SkillsSection from './components/SkillsSection'
import PortfolioSection from './components/PortfolioSection'
import ContactModal from './components/ContactModal'
import {gsap} from 'gsap'
import { EaselPlugin } from "gsap/EaselPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {animateOnScroll} from './animations/scrollTriggerFunctions'



function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  function handlePerformance(list) {
    list.getEntries().forEach(entry => {
      ReactGA.timing({
        category: "Load Performance",
        variable: 'Server Latency',
        value: entry.responseStart - entry.requestStart 
      })
      ReactGA.timing({ 
        category: "Load Performance",
        variable: 'Download Time',
        value: entry.responseEnd - entry.responseStart
      })
      ReactGA.timing({
        category: "Load Performance",
        variable: 'Total App Load Time',
        value: entry.responseEnd - entry.requestStart
      })
  })
}
useEffect(() => {
  ReactGA.initialize([
    { 
      trackingId: 'G-YJK7R2Y1TL',
      gaOptions: { siteSpeedSampleRate: 100, name: 'GAtracker', cookieDomain: 'none', storage: 'none' }
    },
    { 
      trackingId: "UA-181494074-1",
      standardImplementation: true,
      gaOptions: { siteSpeedSampleRate: 100, name: 'OriginalTracker', cookieDomain: 'none', storage: 'none'}
    }
  ])
  var observer = new PerformanceObserver(handlePerformance);
observer.observe({entryTypes: ['navigation'] })
}, [])
ttiPolyfill.getFirstConsistentlyInteractive().then((tti) => {
  ReactGA.timing({
    category: "Load Performance",
    variable: 'Time to Interactive',
    value: tti 
  })
});
  useEffect(() => {
    gsap.registerPlugin(EaselPlugin, MotionPathPlugin, ScrollToPlugin, ScrollTrigger);
    animateOnScroll()
    M.AutoInit()
  }, [])
  document.addEventListener('DOMContentLoaded', () => {
    var elems = document.querySelectorAll('.modal');
    console.log(elems)
    console.log(M.Modal)
    var instances = M.Modal.init(elems);
  });

  return (
    <div className="App">
    <Navbar setModalIsOpen={setModalIsOpen} open={modalIsOpen}/>
    <HeroSection/>
    <FeaturedSection/>
    <SkillsSection/>
    <PortfolioSection/>
    <ContactModal open={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
    </div>
  );
}

export default App;

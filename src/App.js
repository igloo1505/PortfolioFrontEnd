import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import Navbar from "./components/Navbar";
import M from "materialize-css/dist/js/materialize.min.js";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css/MaterializeModal.css";
import "./css/App.css";
import "./css/Gallery.css";
import ttiPolyfill from "tti-polyfill";
import LandingPage from "./Pages/LandingPage";
import ComponentGallery from "./Pages/ComponentGallery";
import { gsap } from "gsap";
import { EaselPlugin } from "gsap/EaselPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateOnScroll } from "./animations/scrollTriggerFunctions";

function App() {
const [styleFromPath, setStyleFromPath] = useState({})

// useEffect(() => {
//   // const location = useLocation()
//   // console.log("PATHNAME: ", location)
// }, [])

  function handlePerformance(list) {
    list.getEntries().forEach((entry) => {
      ReactGA.timing({
        category: "Load Performance",
        variable: "Server Latency",
        value: entry.responseStart - entry.requestStart,
      });
      ReactGA.timing({
        category: "Load Performance",
        variable: "Download Time",
        value: entry.responseEnd - entry.responseStart,
      });
      ReactGA.timing({
        category: "Load Performance",
        variable: "Total App Load Time",
        value: entry.responseEnd - entry.requestStart,
      });
    });
  }
  useEffect(() => {
    ReactGA.initialize([
      {
        trackingId: "G-YJK7R2Y1TL",
        gaOptions: {
          siteSpeedSampleRate: 100,
          name: "GAtracker",
          cookieDomain: "none",
          storage: "none",
        },
      },
      {
        trackingId: "UA-181494074-1",
        standardImplementation: true,
        gaOptions: {
          siteSpeedSampleRate: 100,
          name: "OriginalTracker",
          cookieDomain: "none",
          storage: "none",
        },
      },
    ]);
    var observer = new PerformanceObserver(handlePerformance);
    observer.observe({ entryTypes: ["navigation"] });
  }, []);
  ttiPolyfill.getFirstConsistentlyInteractive().then((tti) => {
    ReactGA.timing({
      category: "Load Performance",
      variable: "Time to Interactive",
      value: tti,
    });
  });

  useEffect(() => {
    gsap.registerPlugin(
      EaselPlugin,
      MotionPathPlugin,
      ScrollToPlugin,
      ScrollTrigger
    );
    animateOnScroll();
    M.AutoInit();
  }, []);
  document.addEventListener("DOMContentLoaded", () => {
    var elems = document.querySelectorAll(".modal");

    var instances = M.Modal.init(elems);
  });

  return (
    <Router>
      <div className="App" style={styleFromPath}>
        <Switch>
          <Route path="/landing">
            <LandingPage />
          </Route>
          <Route path="/">
            <ComponentGallery setStyleFromPath={setStyleFromPath} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

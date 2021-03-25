import React from "react";
import { portfolioArray, HeroImagePallet } from "../UniversalData";
import portfolioImageOne from "../assets/portfolioImageOne.png";
import triviaScreenShot from "../assets/triviaScreenShot.png";
import jeopardyScreenShot from "../assets/jeopardyScreenShot.png";

const PortfolioSection = () => {
  const imageArray = [triviaScreenShot, jeopardyScreenShot];
  return (
    <section className="portfolio">
      {portfolioArray.map((p) => (
        <div
          className={`portfolio-container transitionLeft${p.transitionIndex}`}
        >
          <div className={`portfolio-${p.orientation}-${p.transitionIndex}`}>
            <div className="inner">
              <p
                className="subtitle"
                style={{ color: HeroImagePallet.secondary }}
              >
                {p.appName}
              </p>
              <p className="featured-title">{p.subTitle}</p>
              <p className="featured-desc">{p.description}</p>
              <div className="portfolio-link-container">
                <p className="repo-link">
                  <a
                    href={p.repo}
                    style={{
                      textDecoration: "none",
                      color: "rgb(0, 160, 242)",
                    }}
                  >
                    Repo
                  </a>
                </p>
                <p className="project-link">
                  <a
                    href={p.url}
                    style={{
                      textDecoration: "none",
                      color: "rgb(0, 160, 242)",
                    }}
                  >
                    Live Project
                  </a>
                </p>
              </div>
            </div>
          </div>
          <a href={p.url}>
            <img
              className={`portfolio-right transitionRight${p.transitionIndex}`}
              src={imageArray[p.index]}
              alt="Portfolio"
            />
          </a>
        </div>
      ))}
    </section>
  );
};

export default PortfolioSection;

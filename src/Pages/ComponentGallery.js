import React, { useState, useEffect } from "react";
import {shouldHideBodyOverflow} from "../utilityFunctions"
import {gsap} from 'gsap'
import Navbar from "../components/Navbar";
import PanaromicImageSection from "../components/componentGallery/PanaromicImageSection";
import CameraProductCard from "../components/componentGallery/CameraProductCard";
import ContactModal from "../components/ContactModal";
import {moveToSectionBelow} from '../utilityFunctions'


const ComponentGallery = ({setStyleFromPath}) => {
  useEffect(() => {
    shouldHideBodyOverflow(true)
  }, [])
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isInitialView, setIsInitialView] = useState(false);
  const [gallerySectionToDisplay, setGallerySectionToDisplay] = useState(1);
  let vh = Math.max(document.documentElement.clientHeight)
  if(gallerySectionToDisplay === 2 && isInitialView === true) {
    // gsap.to(".gallerySection", {
    //     duration: 0.5,
    //     transform: `translateY(-${vh}px)`,
    //   })
     moveToSectionBelow()
  }
  
  return (
    <div className="componentGallery">
      <Navbar currentPath="gallery" />
      <PanaromicImageSection setGallerySectionToDisplay={setGallerySectionToDisplay} setIsInitialView={setIsInitialView} isInitialView={isInitialView} gallerySectionToDisplay={gallerySectionToDisplay}/>
      <CameraProductCard />
      <ContactModal open={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>
  );
};

export default ComponentGallery;

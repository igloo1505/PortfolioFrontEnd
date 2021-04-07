import {gsap} from 'gsap';

export const shouldHideBodyOverflow = (hide) => {
    let em = document.getElementById("bodyHtml")
    if(hide === true) {
        em.classList.add("bodyHtmlHidden")
    }
    if(hide === false) {
        em.classList.remove("bodyHtmlHidden")
    }
}

export const getViewportDimensions = () => {
        let vh = Math.max(document.documentElement.clientHeight)
        let vw = Math.max(document.documentElement.clientWidth)
        return {
            height: vh,
            width: vw
        }
}

export const moveToSectionBelow = () => {
    let vp = getViewportDimensions()
    gsap.to(".gallerySection", {
        duration: 0.5,
        transform: `translateY(-${vp.height}px)`
    })
}

export const moveToSectionRight = () => {
    let vp = getViewportDimensions()
    gsap.to(".gallerySection", {
        duration: 0.5,
        transform: `translateX(-${vp.width}px)`
    })
}
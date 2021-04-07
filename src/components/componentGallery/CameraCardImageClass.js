import { useTransition, animated } from 'react-spring'
import camera from "../../assets/cameraProductCard/cameraTransparentBackground.png";
import cameraTwo from "../../assets/cameraProductCard/cameraTwoTransparentBackground.png";
import cameraThree from "../../assets/cameraProductCard/cameraThreeTransparentBackground.png";
import cameraFour from "../../assets/cameraProductCard/cameraFourTransparentBackground.png";
import cameraFive from "../../assets/cameraProductCard/cameraFiveTransparentBackground.png";

export class CameraCardImage {
    constructor(image, index){
        this.image = image
        this.key = index
    }
}

export const CameraCardImageArray  = [
		new CameraCardImage(camera, 1),
		new CameraCardImage(cameraTwo, 2),
		new CameraCardImage(cameraThree, 3),
		new CameraCardImage(cameraFour, 4),
		new CameraCardImage(cameraFive, 5),
	]


 export const cameraImageArrayAsComponents = [
     ({style, key}) => <animated.img src={camera} alt="Camera Gear" className="currentCameraCardImage" style={{...style}} key={key}/>,
     ({style, key}) => <animated.img src={cameraTwo} alt="Camera Gear" className="currentCameraCardImage" style={{...style}} key={key}/>,
     ({style, key}) => <animated.img src={cameraThree} alt="Camera Gear" className="currentCameraCardImage" style={{...style}} key={key}/>,
     ({style, key}) => <animated.img src={cameraFour} alt="Camera Gear" className="currentCameraCardImage" style={{...style}} key={key}/>,
     ({style, key}) => <animated.img src={cameraFive} alt="Camera Gear" className="currentCameraCardImage" style={{...style}} key={key}/>
 ] 

//  export const cameraImageArrayAsComponents = [
//      ({style, key}) => <animated.div style={style} key={key}>Welp</animated.div>,
//      ({style, key}) => <animated.div style={style} key={key}>Maybe</animated.div>,
//      ({style, key}) => <animated.div style={style} key={key}>This</animated.div>,
//      ({style, key}) => <animated.div style={style} key={key}>is</animated.div>,
//      ({style, key}) => <animated.div style={style} key={key}>The Problem</animated.div>
//  ]

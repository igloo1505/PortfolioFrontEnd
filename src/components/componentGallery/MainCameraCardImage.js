import React, {useEffect, useState} from 'react'
import { animated, useTransition, config } from 'react-spring';
import {CameraCardImageArray as imageArray, cameraImageArrayAsComponents} from './CameraCardImageClass'

const MainCameraCardImage = ({index}) => {
    // console.log("config", config)
        
    return (
        <div className="photo-main">
				<div className="controls">
					<i className="material-icons">Add Share SVG</i>
					<i className="material-icons">Add Fav SVG</i>
				</div>
                <ExtractedSubView index={index} imageArray={imageArray}/>
			</div>
    )
}

export default MainCameraCardImage


const ExtractedSubView = ({index}) => {
    const [internal, setInternal] = useState(0)
    useEffect(() => {
        console.log("Setting state")
        setInternal(index)
    }, [index])
    
    const transition = useTransition(internal, item => item, {
    from: { opacity: 0, transform: 'translate3d(30%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    config: config.slow, 
    delay: 500
    })

    return (
        <div>
    {transition.map(({item, key, props}) => {
        const ImageComponent = cameraImageArrayAsComponents[item]
                return <ImageComponent key={key} style={props}/>
    }
                )
    }
    </div>
    )
}


import React, {useState, useEffect} from 'react'
import MainCameraCardImage from './MainCameraCardImage'
import {CameraCardImageArray as imageArray} from './CameraCardImageClass'


const CameraProductCard = () => {
	const [isInitialRender, setIsInitialRender] = useState(true)
	const [currentImageIndex, setCurrentImageIndex] = useState(0)
	
const handlePhotoAlbumClick = (i) => {
	setIsInitialRender(false)
	setCurrentImageIndex(i)
}
	useEffect(() => {
		setCurrentImageIndex(0)
	}, [])

	// setInterval(() => {
	// 	if(currentImageIndex < imageArray.length - 1){
	// 	setCurrentImageIndex(state => state + 1)
	// 	}
	// 	else {
	// 		setCurrentImageIndex(0)
	// 	}
	// }, 1500);

    return (
        <div className="gallerySection drinkProductCardSection">
            <div class="product">
	<div class="product__photo">
		<div class="photo-container">
			<MainCameraCardImage index={currentImageIndex} />
			<div class="photo-album">
				<ul>
					{
						imageArray.map((c, index) => 
							<li className={index === currentImageIndex ? "imageInAlbum currentImageInAlbum" : "imageInAlbum"} onClick={() => 
								handlePhotoAlbumClick(index)
							}><img src={imageArray[index].image} alt="Camera Gallery"/></li>
						)
					}
				</ul>
			</div>
		</div>
	</div>
	<div class="product__info">
		<div class="title">
			<h1>Delicious Apples</h1>
			<span>COD: 45999</span>
		</div>
		<div class="price">
			R$ <span>7.93</span>
		</div>
		<div class="variant">
			<h3>SELECT A COLOR</h3>
			<ul>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"/></li>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple"/></li>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple"/></li>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple"/></li>
			</ul>
		</div>
		<div class="description">
			<h3>BENEFITS</h3>
			<ul>
				<li>Apples are nutricious</li>
				<li>Apples may be good for weight loss</li>
				<li>Apples may be good for bone health</li>
				<li>They're linked to a lowest risk of diabetes</li>
			</ul>
		</div>
		<button class="buy--btn">ADD TO CART</button>
	</div>
</div>
        </div>
    )
}

export default CameraProductCard

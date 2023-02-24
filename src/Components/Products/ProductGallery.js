import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import mobile from '../../Assets/images/mobile.png'
import mobile2 from '../../Assets/images/mobile2.png'
import mobile1 from '../../Assets/images/mobile1.png'
import RightButton from "./LeftButton";
import LeftButton from "./RightButton";
function ProductGallery({product}){
    const images = product.data ? product.data.images : []
    console.log(images)
    return (
        <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2">

        <ImageGallery
        defaultImage={mobile}
        items={images}
        showPlayButton={false}
        renderRightNav={LeftButton}
        renderLeftNav={RightButton}
        showThumbnails={false}
        showFullscreenButton={false}
        />
        </div>
    )
}

export default ProductGallery
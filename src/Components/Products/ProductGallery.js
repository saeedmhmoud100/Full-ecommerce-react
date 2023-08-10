import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import RightButton from "./LeftButton";
import LeftButton from "./RightButton";
function ProductGallery({images}){

    return (
        <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2">

        <ImageGallery
        items={images}
        thumbnail={images}
        showPlayButton={false}
        renderRightNav={LeftButton}
        renderLeftNav={RightButton}
        thumbnailHeight={'50px'}
        thumbnailWidth ={50}
        showThumbnails={false}
        showFullscreenButton={false}
        />
        </div>
    )
}

export default ProductGallery
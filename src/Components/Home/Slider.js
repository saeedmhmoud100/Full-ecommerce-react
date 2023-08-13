import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

import sliderimg from "../../Assets/images/slider1.png";
import slider4 from "../../Assets/images/slider4.png";
import prod3 from "../../Assets/images/prod3.png";
import prod4 from "../../Assets/images/prod4.png";

import '../../Assets/Style/Slider.scss'
const Silder = () => {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="slider-background" interval={2000}>
                <div className="d-flex justify-content-center align-items-center slider_container">
                    <img
                        style={{ height: "296px", width: "313.53px" }}
                        className=""
                        src={slider4}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title">There is an offer!!!</h3>
                        <p className="slider-text">Up to 50% off when you buy</p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className="slider-background2" interval={2000}>
                <div className="d-flex justify-content-center align-items-center slider_container">
                    <img
                        style={{ height: "296px", width: "313.53px" }}
                        className=""
                        src={'https://saeedmhmoud100.github.io/Full-ecommerce-react'+sliderimg}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title">There is an offer!!!</h3>
                        <p className="slider-text">Up to 50% off when you buy</p>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item className="slider-background3" interval={2000}>
                <div className="d-flex justify-content-center align-items-center slider_container">
                    <img
                        style={{ height: "296px", width: "373.53px" }}
                        className=""
                        src={'https://saeedmhmoud100.github.io/Full-ecommerce-react'+prod3}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title">There is an offer!!!</h3>
                        <p className="slider-text">Up to 50% off when you buy</p>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item className="slider-background4" interval={2000}>
                <div className="d-flex justify-content-center align-items-center slider_container">
                    <img
                        style={{ height: "296px", width: "373.53px" }}
                        className=""
                        src={'https://saeedmhmoud100.github.io/Full-ecommerce-react'+prod4}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title">There is an offer!!!</h3>
                        <p className="slider-text">Up to 50% off when you buy</p>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default Silder
import React from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductContainer from "../../Components/Products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeature from "../../Components/Brand/BrandFeatured";
import '../../Assets/Style/HomePage.scss'
function HomePage(){
    return(
        <div className={'font'} style={{minHeight:'670px'}}>
            <Slider />
            <HomeCategory />
            <CardProductContainer title={"Best Sellers" } btntitle={'More'}/>
            <DiscountSection />
            <CardProductContainer title={"Top Rated" } btntitle={'More'}/>
            <BrandFeature title={"Famous Brands" } btntitle={'More'} />
        </div>


    )
}
export default HomePage
import React from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductContainer from "../../Components/Products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeature from "../../Components/Brand/BrandFeatured";
import '../../Assets/Style/HomePage.scss'
import HomePageProductHook from "../../hooks/product/Home-Page-Product-Hook";
function HomePage(){
    const [moreSalesProducts,topRateProducts] = HomePageProductHook()

    return(
        <div className={'font'}>
            <Slider />
            <HomeCategory />
             <CardProductContainer products={moreSalesProducts} title={"Best Sellers" } btntitle={'More'} pathText="/products"/>

            <DiscountSection />
            <CardProductContainer products={topRateProducts} title={"Top Rated" } btntitle={'More'} pathText="/products"/>

            <BrandFeature title={"Famous Brands" } btntitle={'More'} />
        </div>


    )
}
export default HomePage
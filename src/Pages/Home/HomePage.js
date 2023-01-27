import React from "react";
import NavBarLogin from "../../Components/Uitily/NavBarLogin";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductContainer from "../../Components/Products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";

function HomePage(){
    return(
        <div className={'font'} style={{minHeight:'670px'}}>
            <NavBarLogin />
            <Slider />
            <HomeCategory />
            <CardProductContainer title={"Best Sellers" } btntitle={'More'}/>
            <DiscountSection />
            <CardProductContainer title={"Top Rated" } btntitle={'More'}/>
        </div>


    )
}
export default HomePage
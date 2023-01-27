import React from "react";
import NavBarLogin from "../../Components/Uitily/NavBarLogin";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";

function HomePage(){
    return(
        <div className={'font'} style={{minHeight:'670px'}}>
            <NavBarLogin />
            <Slider />
            <HomeCategory />
        </div>


    )
}
export default HomePage
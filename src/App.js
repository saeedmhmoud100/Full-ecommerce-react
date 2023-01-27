import React, {useEffect} from "react";
import HomePage from "./Pages/Home/HomePage";
import {Routes, Route, useLocation} from "react-router-dom";
import NavBarLogin from "./Components/Uitily/NavBarLogin";
import Footer from "./Components/Uitily/Footer";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import AllBrandPage from "./Pages/Brand/AllBrandPage";
import ShopProductsPage from "./Pages/Products/ShopProductsPage";

function App() {
    // Go to in the top when go to another page
    const routePath = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [routePath]);
    //

    return (
    <div className="text-center font">
        <NavBarLogin />
        <Routes>
            <Route index element={<HomePage />} />
            <Route path={'/login'} element={<LoginPage />} />
            <Route path={'/register'} element={<RegisterPage />} />
            <Route path={'/allcategory'} element={<AllCategoryPage />} />
            <Route path={'/allbrand'} element={<AllBrandPage />} />
            <Route path={'/products'} element={<ShopProductsPage />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;

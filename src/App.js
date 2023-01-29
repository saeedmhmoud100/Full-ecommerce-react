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
import ProductDetailsPage from "./Pages/Products/ProductDetailsPage";
import CartPage from "./Pages/Cart/CartPage";
import ChoosePayMethoudPage from "./Pages/Checkout/ChoosePayMethoudPage";
import AdminAllProductsPages from "./Pages/Admin/AdminAllProductsPage";

function App() {
    // Go to in the top when go to another page
    const routePath = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [routePath]);
    //

    return (
    <div className="font">
        <NavBarLogin />
        <Routes>
            <Route index element={<HomePage />} />
            <Route path={'/login'} element={<LoginPage />} />
            <Route path={'/register'} element={<RegisterPage />} />
            <Route path={'/allcategory'} element={<AllCategoryPage />} />
            <Route path={'/allbrand'} element={<AllBrandPage />} />
            <Route path={'/products'} element={<ShopProductsPage />} />
            <Route path={'/products/:id'} element={<ProductDetailsPage />} />
            <Route path={'/cart'} element={<CartPage />} />
            <Route path={'/order/paymethoud'} element={<ChoosePayMethoudPage />} />
            <Route path={'/admin/allProducts'} element={<AdminAllProductsPages />} />

        </Routes>
        <Footer/>
    </div>
  );
}

export default App;

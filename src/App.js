import React, {useEffect, useState} from "react";
import HomePage from "./Pages/Home/HomePage";
import {Routes, Route, useLocation, Navigate} from "react-router-dom";
import NavBarLogin from "./Components/Uitily/NavBarLogin";
import Footer from "./Components/Uitily/Footer";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import AllBrandPage from "./Pages/Brand/AllBrandPage";
import ShopProductsPage from "./Pages/Products/ShopProductsPage";
import ProductDetailsPage from "./Pages/Products/ProductDetailsPage";
import CartPage from "./Pages/Cart/CartPage";
import AdminRoutes from "./Routes/AdminRouts";
import UserRoutes from "./Routes/UserRouts";
import {ToastContainer} from "react-toastify";
import ProtectRoutesHook, {CheckInternetConnection, NotFound} from "./hooks/protect-routes-hook";
import AuthRoutes from "./Routes/AuthRouts";
import NoInternetPage from "./Pages/Offline/NoInternetPage";
import OfflineHook from "./hooks/offline-hook";

function App() {
    // Go to in the top when go to another page
    const routePath = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [routePath]);
    //

    const [isUser,isAdmin,loginUserData] = ProtectRoutesHook()
    const [isOnline] = OfflineHook()


    return (
        <div className="font">

            <CheckInternetConnection internet={isOnline} component={<NavBarLogin />} noInternetComponent={<NoInternetPage />}/>

            <Routes>
                <Route element={<CheckInternetConnection internet={isOnline} noInternetComponent={<NoInternetPage />}/>}>

                    <Route path={'Full-ecommerce-react/'} element={<HomePage />} />
                    {/*<Route index element={<Navigate to={'/Full-ecommerce-react/'} replace={true} /> } />*/}

                    <Route path={'Full-ecommerce-react/auth/*'} element={<AuthRoutes isLoggedOut={!localStorage.getItem('token')}/>} />
                    <Route path={'Full-ecommerce-react/admin/*'} element={<AdminRoutes isAdmin={isAdmin } />} />
                    <Route path={'Full-ecommerce-react/user/*'} element={<UserRoutes isUser={isUser}/>} />


                    <Route path={'Full-ecommerce-react/allcategory'} element={<AllCategoryPage />} />
                    <Route path={'Full-ecommerce-react/allbrand'} element={<AllBrandPage />} />
                    <Route path={'Full-ecommerce-react/products'} element={<ShopProductsPage />} />
                    <Route path={'Full-ecommerce-react/products/:id'} element={<ProductDetailsPage />} />
                    <Route path={'Full-ecommerce-react/cart'} element={<CartPage />} />


                    <Route path={'*'} element={<NotFound />} />
                </Route>


                {/*<Route path={'/nointernet'} element={<NoInternetPage />} />*/}

            </Routes>
            <Footer/>
            <ToastContainer />
        </div>
    );
}

export default App;

import React from "react";
import HomePage from "./Pages/Home/HomePage";
import {Routes,Route} from "react-router-dom";
import NavBarLogin from "./Components/Uitily/NavBarLogin";
import Footer from "./Components/Uitily/Footer";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";

function App() {
  return (
    <div className="text-center font">
        <NavBarLogin />
        <Routes>
            <Route index element={<HomePage />} />
            <Route path={'/login'} element={<LoginPage />} />
            <Route path={'/register'} element={<RegisterPage />} />
            <Route path={'/allcategory'} element={<AllCategoryPage />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;

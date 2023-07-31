import {Navigate, Route, Routes} from "react-router-dom";
import AdminAllProductsPages from "../Pages/Admin/AdminAllProductsPage";
import AdminAllOrdersPages from "../Pages/Admin/AdminAllOrdersPage";
import AdminOrderDetailsPage from "../Pages/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "../Pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "../Pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "../Pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductPage from "../Pages/Admin/AdminAddProductPage";
import AdminUpdateProductPage from "../Pages/Admin/AdminUpdateProductPage";
import AdminCouponsPage from "../Pages/Admin/AdminCouponsPage";

const AdminRoutes = ({isAdmin}) => { // URL is: admin/*
    return(
        isAdmin ?
            <Routes>
                <Route path={'allProducts'} element={<AdminAllProductsPages/>}/>
                <Route path={'addproduct'} element={<AdminAddProductPage/>}/>
                <Route path={'updateproduct/:id'} element={<AdminUpdateProductPage/>}/>
                {/*<Route path={'updateproduct/:id'} element={<AdminUpdateProductPage/>}/>*/}
                <Route path={'allorders'} element={<AdminAllOrdersPages/>}/>
                <Route path={'allorders/:id'} element={<AdminOrderDetailsPage/>}/>
                <Route path={'addbrand'} element={<AdminAddBrandPage/>}/>
                <Route path={'addcategory'} element={<AdminAddCategoryPage/>}/>
                <Route path={'addsubcategory'} element={<AdminAddSubCategoryPage/>}/>
                <Route path={'coupons'} element={<AdminCouponsPage/>}/>
            </Routes>
            :
            <Routes>
                <Route
                    path="*"
                    element={<Navigate to={localStorage.getItem('token') ? '/' : "/auth/login"} replace />}
                />
            </Routes>
    )
};

export default AdminRoutes;